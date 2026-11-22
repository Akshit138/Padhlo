# 📚 Padhlo – Your AI-Powered Personal Study Planner

**Study Smarter. Plan Better. Achieve More.**

Padhlo is an AI-powered personalized study planning platform designed to help students manage their academic workload efficiently. It uses Artificial Intelligence to generate customized study schedules based on subjects, syllabus, exam dates, preparation levels, subject difficulty, and daily availability.

Instead of following generic timetables, Padhlo creates intelligent and realistic study plans that adapt to each student's academic needs.

---

## 🎯 Problem Statement

Students often struggle to balance multiple subjects, assignments, examinations, and personal commitments. Traditional timetable applications provide fixed schedules without considering individual preparation levels, subject difficulty, or upcoming examination dates.

**Padhlo solves this problem by using AI and Prompt Engineering to create personalized, flexible, and practical study schedules.**

## ✨ Key Features

- **AI Study Plan Generation:** Generate personalized study timetables based on academic requirements.
- **Smart Subject Prioritization:** Give more attention to difficult subjects and upcoming examinations.
- **Preparation Tracking:** Monitor subject-wise preparation percentages.
- **Daily Study Schedule:** Organize learning sessions, revision, practice, and breaks.
- **Exam Countdown:** Keep track of upcoming examinations.
- **Flexible Scheduling:** Modify or regenerate study plans according to changing availability.
- **Progress Tracking:** Monitor completed study tasks and academic progress.
- **Responsive Interface:** Access the platform across desktop, tablet, and mobile devices.
- **Dark/Light Mode:** Choose a comfortable visual experience.

## 🤖 How AI Works

Padhlo uses a structured prompting approach to generate meaningful study plans.

The AI considers:

1. Student information and academic context.
2. Subjects and syllabus.
3. Subject difficulty levels.
4. Current preparation percentages.
5. Examination dates and deadlines.
6. Daily available study hours.
7. Revision and practice requirements.

These inputs are processed through carefully designed prompts to generate realistic and personalized study schedules.

### Prompt Engineering Approach

Padhlo uses the following prompting principles:

- Role-based prompting
- Context-based prompting
- Constraint-based prompting
- Instruction-based prompting
- Structured output generation

The objective is to produce accurate, relevant, and organized study recommendations rather than generic AI responses.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Bolt AI | Initial website development |
| Cursor AI | Code development, debugging and optimization |
| React / TypeScript | Frontend development |
| Gemini API | AI-powered study plan generation |
| Vercel | Website deployment and hosting |
| Git & GitHub | Version control and project management |

*The technology list should be adjusted if the final implementation uses a different framework or language.*

## ⚙️ How It Works

1. Open Padhlo.
2. Enter your academic information.
3. Add subjects, syllabus, difficulty levels and examination dates.
4. Specify your available study hours.
5. Generate your personalized AI study plan.
6. Follow your daily timetable.
7. Track progress and modify your schedule whenever required.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Git
- Gemini API key

### Installation

**1. Clone the repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd padhlo
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Never expose your API key in frontend code or commit your `.env` file to GitHub.

**5. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal to access Padhlo.

## 🔐 Security

- API keys are stored using environment variables.
- AI requests should be handled through a secure backend.
- Sensitive credentials must never be committed to public repositories.
- User inputs should be validated before processing.

## 🎓 Project Information

**Project Name:** Padhlo  
**Project Category:** Artificial Intelligence / Prompt Engineering  
**Project Type:** Web Application  
**Primary Objective:** Personalized Academic Planning  
**Target Users:** School and College Students

Developed as part of a B.Tech Computer Science and Engineering academic practical project.

## 🌟 Vision

Our vision is to make academic planning smarter, simpler, and more accessible by helping students focus on what matters most, manage their time effectively, and achieve their academic goals.

**Padhlo – Because studying smarter is better than studying harder.**

---

*Built with AI. Powered by Better Prompts. Designed for Students.*
