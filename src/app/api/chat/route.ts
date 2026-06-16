import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: Request) {
  try {
    // -------------------------------
    // 1. Check API Key
    // -------------------------------
    const apiKey = process.env.GROQ_API_KEY;

    console.log("GROQ KEY LOADED:", !!apiKey);

    if (!apiKey) {
      return NextResponse.json(
        { reply: "Server error: API key missing" },
        { status: 500 }
      );
    }

    // -------------------------------
    // 2. Parse request body
    // -------------------------------
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { reply: "Invalid message" },
        { status: 400 }
      );
    }

    // -------------------------------
    // 3. Init Groq client
    // -------------------------------
    const client = new Groq({
      apiKey: apiKey,
    });

    // -------------------------------
    // 4. Call Groq API
    // -------------------------------
    const completion = await client.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        {
          role: "system",
          content:
            "You are Mubashir's AI assistant. Answer briefly and clearly.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I couldn't generate a response.";

    // -------------------------------
    // 5. Send response
    // -------------------------------
    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat API Error:", error);

    return NextResponse.json(
      { reply: "Server error. Please try again." },
      { status: 500 }
    );
  }
}