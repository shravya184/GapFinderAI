# GapFinder AI

GapFinder AI helps students identify weak topics and prepare for exams using their own syllabus, notes, textbook chapters, and previous question papers.

## Features

- Upload PDF, TXT, and Markdown study materials.
- Extract topics and create an editable syllabus map.
- Generate diagnostic questions from uploaded materials.
- Evaluate answers and identify weak, medium, and strong topics.
- Show topic-level mastery and source citations.
- Generate personalized revision plans.
- RAG-based learning assistant.
- Track learning progress and AI agent activity.

## Technology Stack

- Frontend: Next.js 15, React 19, TypeScript, CSS
- AI Integration: Groq API, Vercel AI SDK
- Retrieval: BM25, RAG
- Validation: Zod
- Document Processing: unpdf
- Storage: IndexedDB and localStorage

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd gapfinder-ai
```

Install dependencies:

```bash
npm install
```

Create the environment file:

```bash
cp .env.example .env.local
```

Add your Groq API key in `.env.local`:

```env
GROQ_API_KEY=your_groq_api_key
```

Get your API key:
https://console.groq.com/keys

## Run the Project

```bash
npm run dev
```

Open:

http://localhost:3000

## Demo Login

Email: demo@gapfinder.ai

Password: demo1234

## Available Commands

| Command | Description |
|---|---|
| npm install | Install dependencies |
| npm run dev | Run development server |
| npm run build | Create production build |
| npm start | Start production server |
| npm test | Run tests |

## How It Works

1. Upload syllabus, notes, and previous question papers.
2. Generate the syllabus topic map.
3. Take a diagnostic quiz.
4. Analyze answers and identify knowledge gaps.
5. Generate a personalized revision plan.
6. Use the learning assistant for explanations.
7. Take another quiz to measure improvement.

## Deployment

Deploy using Vercel:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Set the project root directory to `gapfinder-ai` if required.
4. Add `GROQ_API_KEY` in Environment Variables.
5. Deploy the application.

## Important Notes

- A valid Groq API key is required for AI-powered features.
- The application uses browser storage for student accounts and study data.
- Clearing browser data may remove locally stored information.
- Browser-based authentication is suitable for a prototype, not production-grade security.

