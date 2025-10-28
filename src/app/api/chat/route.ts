// app/api/chat/route.ts
import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: Request) {
  try {
    // ---- 1. API key check -------------------------------------------------
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "GROQ_API_KEY missing" },
        { status: 500 }
      );
    }

    const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

    // ---- 2. Parse body ----------------------------------------------------
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const { message } = body;
    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // ---- 3. Call Groq ------------------------------------------------------
    const chatCompletion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",          // fast & stable
      messages: [
        {
          role: "system",
          content: `
You are **Mubashirs AI Assistant** (robot emoji).  
Your **only job** is to give honest, factual answers about Mubashir Khan using **exactly** the information below.  
If a question goes beyond these facts, reply:

> “I only know whats listed here ask Mubashir directly or check his portfolio!”

---

### MUBASHIR KHAN VERIFIED FACTS

#### Frontend Skills
- HTML5
- CSS3 / TailwindCSS
- JavaScript / TypeScript
- React.js
- Next.js (App Router)
- ShadCN UI
- Framer Motion

#### Backend Skills
- Node.js
- API Integration (REST, MockAPI, Sanity)
- Git & GitHub
- Streamlit

#### Other Skills
- Python (Beginner)
- Prompt Engineering
- Problem Solving

#### Projects
1. **Chitty Chat Assistant** Front-End + AI Agents  
   A friendly AI chatbot that helps users with info and answers questions in a fun way.

2. **Fitlytic** Full Stack  
   A fitness & workout planning platform that uses AI to help users reach health goals.

3. **The Pawfect Store** Full Stack  
   A user-friendly web app for pet lovers to find their loving partner.

4. **Pizza Run** Full Stack  
   Q-commerce website for the restaurant Pizza Run.

5. **Quick Crave** Full Stack  
   Q-commerce website for the café Quick Crave.

6. **Urdu Rap And Reality** Front End  
   A blog website for Urdu Rap And Reality.

> *More projects can be found on Mubashirs LinkedIn profile.*

---

**Response style**  
- Keep it short, friendly, and enthusiastic.  
- Use bullet points or numbered lists when listing skills/projects.  
- End with a call-to-action when it makes sense (e.g., “Check the live demo on the portfolio!”).

--- 
`.trim(),
        },
        { role: "user", content: message },
      ],
      temperature: 0.7,
      max_tokens: 1024,
      stream: false,
    });

    // ---- 4. Return reply --------------------------------------------------
    const reply =
      chatCompletion.choices?.[0]?.message?.content?.trim() ||
      "Hey! I'm Mubashir’s AI Assistant (robot emoji) – ask me about his skills or projects!";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Groq error:", error);
    return NextResponse.json(
      { error: "Something went wrong – check server logs." },
      { status: 500 }
    );
  }
}