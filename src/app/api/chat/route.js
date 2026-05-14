import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { message, history } = await request.json();
    const apiKey = process.env.GROQ_API_KEY;

    const systemInstruction = `You are a smart and friendly AI assistant for NexoraStudio — a creative digital agency.
Services: Social Media Management, Reel & Video Creation, Website Development, Poster & Graphic Design, Brand Strategy.
Rules:
- Be warm, helpful, concise (max 80 words unless asked for more)
- For pricing questions say: "Visit our Pricing page or click Get Started for custom quotes"
- For caption requests, direct them to the free Caption Generator tool on this page
- Only answer digital marketing or agency-related questions
- End with a helpful follow-up question when relevant`;

    const messages = [
      { role: "system", content: systemInstruction },
      ...(history || []),
      { role: "user", content: message },
    ];

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant", // free, very fast
          messages,
          max_tokens: 300,
          temperature: 0.7,
        }),
      },
    );

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Sorry, try again!";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
