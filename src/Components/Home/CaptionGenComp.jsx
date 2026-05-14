"use client";

import { useState } from "react";

const platforms = ["Instagram", "Facebook", "LinkedIn", "Twitter/X", "YouTube"];
const tones = [
  "Professional",
  "Funny & Casual",
  "Inspirational",
  "Bold & Direct",
  "Storytelling",
];

export default function CaptionGenComp() {
  const [form, setForm] = useState({
    business: "",
    product: "",
    platform: "Instagram",
    tone: "Professional",
  });
  const [captions, setCaptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(null);

  const handleGenerate = async () => {
    if (!form.business.trim() || !form.product.trim()) {
      setError("Please fill in your business name and product/service.");
      return;
    }
    setError("");
    setLoading(true);
    setCaptions([]);

    try {
      const res = await fetch("/api/caption", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.error) {
        setError("Something went wrong. Please try again.");
      } else {
        setCaptions(data.captions || []);
      }
    } catch {
      setError("Connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (caption, i) => {
    const fullText = `${caption.caption}\n\n${caption.hashtags}`;
    navigator.clipboard.writeText(fullText);
    setCopied(i);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section
      style={{
        padding: "100px 0",
        background:
          "linear-gradient(180deg, #0b0b0b 0%, #0e1415 50%, #0b0b0b 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,209,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "100px",
              background: "rgba(0, 209, 255, 0.08)",
              border: "1px solid rgba(0, 209, 255, 0.2)",
              marginBottom: "20px",
            }}
          >
            <span style={{ fontSize: "12px", color: "#00d1ff" }}>✦</span>
            <span
              style={{
                color: "#00d1ff",
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              Free AI Tool
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Generate Captions{" "}
            <span style={{ color: "#00d1ff" }}>Instantly</span>
          </h2>
          <p
            style={{
              color: "#a1a1aa",
              fontSize: "17px",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Enter your business details and get 3 ready-to-post social media
            captions — powered by AI, for free.
          </p>
        </div>

        {/* Form Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(0, 209, 255, 0.15)",
            borderRadius: "20px",
            padding: "36px",
            marginBottom: "36px",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            {/* Business Name */}
            <div>
              <label style={labelStyle}>Business Name *</label>
              <input
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                placeholder="e.g. Meera's Boutique"
                style={inputStyle}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(0,209,255,0.6)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                }
              />
            </div>

            {/* Product/Service */}
            <div>
              <label style={labelStyle}>Product / Service *</label>
              <input
                value={form.product}
                onChange={(e) => setForm({ ...form, product: e.target.value })}
                placeholder="e.g. Handmade sarees, New collection"
                style={inputStyle}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(0,209,255,0.6)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                }
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "28px",
            }}
          >
            {/* Platform */}
            <div>
              <label style={labelStyle}>Platform</label>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "8px",
                }}
              >
                {platforms.map((p) => (
                  <button
                    key={p}
                    onClick={() => setForm({ ...form, platform: p })}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "100px",
                      border: `1px solid ${
                        form.platform === p
                          ? "#00d1ff"
                          : "rgba(255,255,255,0.1)"
                      }`,
                      background:
                        form.platform === p
                          ? "rgba(0,209,255,0.15)"
                          : "transparent",
                      color: form.platform === p ? "#00d1ff" : "#a1a1aa",
                      fontSize: "12px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Tone */}
            <div>
              <label style={labelStyle}>Tone</label>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "8px",
                }}
              >
                {tones.map((t) => (
                  <button
                    key={t}
                    onClick={() => setForm({ ...form, tone: t })}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "100px",
                      border: `1px solid ${
                        form.tone === t ? "#00d1ff" : "rgba(255,255,255,0.1)"
                      }`,
                      background:
                        form.tone === t
                          ? "rgba(0,209,255,0.15)"
                          : "transparent",
                      color: form.tone === t ? "#00d1ff" : "#a1a1aa",
                      fontSize: "12px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {error && (
            <div
              style={{
                color: "#f87171",
                fontSize: "13px",
                marginBottom: "16px",
                padding: "10px 14px",
                background: "rgba(248,113,113,0.08)",
                borderRadius: "8px",
                border: "1px solid rgba(248,113,113,0.2)",
              }}
            >
              ⚠ {error}
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              background: loading
                ? "rgba(0,209,255,0.3)"
                : "linear-gradient(135deg, #00d1ff, #0090cc)",
              border: "none",
              color: loading ? "#777" : "#000",
              fontSize: "15px",
              fontWeight: 800,
              cursor: loading ? "not-allowed" : "pointer",
              letterSpacing: "0.02em",
              transition: "all 0.3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {loading ? (
              <>
                <span
                  style={{
                    display: "inline-block",
                    width: "16px",
                    height: "16px",
                    border: "2px solid rgba(0,209,255,0.5)",
                    borderTop: "2px solid #00d1ff",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                  }}
                />
                Generating with AI...
              </>
            ) : (
              <>✦ Generate 3 Captions — Free</>
            )}
          </button>
        </div>

        {/* Results */}
        {captions.length > 0 && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <h3
              style={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: 700,
                marginBottom: "4px",
                textAlign: "center",
              }}
            >
              ✦ Your AI-Generated Captions
            </h3>
            {captions.map((c, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(0,209,255,0.04)",
                  border: "1px solid rgba(0,209,255,0.15)",
                  borderRadius: "16px",
                  padding: "24px",
                  position: "relative",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(0,209,255,0.35)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(0,209,255,0.15)")
                }
              >
                {/* Caption number badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "20px",
                    background: "rgba(0,209,255,0.15)",
                    color: "#00d1ff",
                    fontSize: "10px",
                    fontWeight: 800,
                    padding: "3px 10px",
                    borderRadius: "100px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Caption {c.id}
                </div>

                {/* Copy button */}
                <button
                  onClick={() => copyToClipboard(c, i)}
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "16px",
                    background:
                      copied === i
                        ? "rgba(34,197,94,0.15)"
                        : "rgba(255,255,255,0.05)",
                    border: `1px solid ${
                      copied === i
                        ? "rgba(34,197,94,0.4)"
                        : "rgba(255,255,255,0.1)"
                    }`,
                    color: copied === i ? "#22c55e" : "#a1a1aa",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontSize: "11px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {copied === i ? "✓ Copied!" : "Copy"}
                </button>

                {/* Caption text */}
                <p
                  style={{
                    color: "#e4e4e7",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    marginTop: "32px",
                    marginBottom: "16px",
                  }}
                >
                  {c.caption}
                </p>

                {/* Hashtags */}
                {c.hashtags && (
                  <p
                    style={{
                      color: "#00d1ff",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "12px",
                      lineHeight: 1.6,
                    }}
                  >
                    {c.hashtags}
                  </p>
                )}

                {/* Best Time */}
                {c.bestTime && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 12px",
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: "100px",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span style={{ fontSize: "12px" }}>🕐</span>
                    <span style={{ color: "#a1a1aa", fontSize: "12px" }}>
                      Best time to post:{" "}
                      <strong style={{ color: "#d4d4d8" }}>{c.bestTime}</strong>
                    </span>
                  </div>
                )}
              </div>
            ))}

            {/* CTA after results */}
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                padding: "24px",
                background: "rgba(0,209,255,0.05)",
                border: "1px solid rgba(0,209,255,0.15)",
                borderRadius: "16px",
              }}
            >
              <p
                style={{
                  color: "#a1a1aa",
                  marginBottom: "16px",
                  fontSize: "14px",
                }}
              >
                Want us to manage your social media professionally?
              </p>
              <a
                href="/pricing"
                style={{
                  padding: "12px 28px",
                  background: "#00d1ff",
                  color: "#000",
                  borderRadius: "100px",
                  fontWeight: 800,
                  fontSize: "14px",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.04)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                View Our Packages →
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 640px) {
          .caption-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const labelStyle = {
  display: "block",
  color: "#a1a1aa",
  fontSize: "12px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: "8px",
};

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "12px",
  color: "#fff",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};
