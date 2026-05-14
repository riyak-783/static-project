import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { business, product, platform, tone } = await request.json();
    const apiKey = process.env.GROQ_API_KEY;

    const prompt = `Generate exactly 3 unique social media captions for:
Business: ${business}
Product/Service: ${product}
Platform: ${platform}
Tone: ${tone}

Format EXACTLY like this:

CAPTION 1:
[caption text with emojis]
Hashtags: #tag1 #tag2 #tag3 #tag4 #tag5
Best Time: [e.g., 7–9 PM]

CAPTION 2:
[caption text with emojis]
Hashtags: #tag1 #tag2 #tag3 #tag4 #tag5
Best Time: [e.g., 12–2 PM]

CAPTION 3:
[caption text with emojis]
Hashtags: #tag1 #tag2 #tag3 #tag4 #tag5
Best Time: [e.g., 6–8 AM]`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 800,
          temperature: 0.85,
        }),
      },
    );

    const data = await response.json();
    const raw =
      data.choices?.[0]?.message?.content || "Could not generate captions.";
    const captions = parseCaptions(raw);

    return NextResponse.json({ captions, raw });
  } catch (error) {
    console.error("Caption error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

function parseCaptions(text) {
  const results = [];
  const blocks = text.split(/CAPTION \d+:/i).filter((b) => b.trim());
  blocks.forEach((block, i) => {
    const lines = block
      .trim()
      .split("\n")
      .filter((l) => l.trim());
    const hashtagLine = lines.find((l) =>
      l.toLowerCase().startsWith("hashtags:"),
    );
    const timeLine = lines.find((l) =>
      l.toLowerCase().startsWith("best time:"),
    );
    const captionLines = lines.filter(
      (l) =>
        !l.toLowerCase().startsWith("hashtags:") &&
        !l.toLowerCase().startsWith("best time:"),
    );
    results.push({
      id: i + 1,
      caption: captionLines.join(" ").trim(),
      hashtags: hashtagLine
        ? hashtagLine.replace(/^hashtags:/i, "").trim()
        : "",
      bestTime: timeLine ? timeLine.replace(/^best time:/i, "").trim() : "",
    });
  });
  return results;
}
