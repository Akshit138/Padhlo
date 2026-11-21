import { createFileRoute } from "@tanstack/react-router";

type ChatMessage = { role: "user" | "assistant"; text: string };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const apiKey = process.env.GROQ_API_KEY;
          if (!apiKey) {
            return Response.json(
              { error: "StudyMate AI is not configured. Add GROQ_API_KEY to your .env file and restart the development server." },
              { status: 503 },
            );
          }

          const body = await request.json() as {
            messages?: ChatMessage[];
            subjects?: { name: string; difficulty: string; preparation: number }[];
          };
          const messages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
          const safeMessages = messages
            .filter((item) =>
              item &&
              (item.role === "user" || item.role === "assistant") &&
              typeof item.text === "string",
            )
            .map((item) => ({ role: item.role, content: item.text.slice(0, 3000) }));

          if (!safeMessages.length || safeMessages[safeMessages.length - 1]?.role !== "user") {
            return Response.json({ error: "Please enter a message to continue." }, { status: 400 });
          }

          const subjectContext = Array.isArray(body.subjects)
            ? body.subjects.slice(0, 20).map((subject) =>
                `${String(subject.name).slice(0, 80)} (${String(subject.difficulty)}, ${Number(subject.preparation)}% prepared)`,
              ).join(", ")
            : "No subjects added yet";

          const upstream = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
              messages: [
                {
                  role: "system",
                  content: `You are StudyMate AI, a friendly and practical study coach for students. Give clear, encouraging, age-appropriate study guidance. Use concise steps, realistic schedules, active recall, spaced repetition, and breaks where relevant. Do not claim to know facts about the student beyond this context. Their current subjects: ${subjectContext}.`,
                },
                ...safeMessages,
              ],
              temperature: 0.7,
              max_tokens: 800,
            }),
          });

          const result = await upstream.json() as {
            choices?: { message?: { content?: string | null } }[];
            error?: { message?: string };
          };

          if (!upstream.ok) {
            console.error("Groq API request failed:", result.error?.message || upstream.status);
            const status = upstream.status === 429 ? 429 : upstream.status === 401 ? 401 : 502;
            return Response.json(
              { error: upstream.status === 401
                  ? "Groq rejected the API key. Check that your new GROQ_API_KEY is correct."
                  : upstream.status === 429
                    ? "The AI service is temporarily rate-limited. Please wait a moment and try again."
                    : "The AI service could not complete that request. Check your Groq model access and API account, then try again." },
              { status },
            );
          }

          const reply = result.choices?.[0]?.message?.content?.trim();
          if (!reply) {
            return Response.json({ error: "The AI returned an empty response. Please try again." }, { status: 502 });
          }

          return Response.json({ reply });
        } catch (error) {
          console.error("Chat API error:", error);
          return Response.json({ error: "Something went wrong while contacting the AI. Please try again." }, { status: 500 });
        }
      },
    },
  },
});
