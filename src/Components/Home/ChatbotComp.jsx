"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatbotComp() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hey! I'm Nexo, your AI brand assistant. Ask me anything about our services — social media, reels, websites, or posters!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]); // Gemini conversation history
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });

      const data = await res.json();
      const reply = data.reply || "Sorry, something went wrong. Try again!";

      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);

      // Update Gemini history (only user+model pairs)
      setHistory((prev) => [
        ...prev,
        { role: "user", parts: [{ text }] },
        { role: "model", parts: [{ text: reply }] },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Connection error. Please try again!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickReplies = [
    "What services do you offer?",
    "How much does it cost?",
    "I need a website",
  ];

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div
          className="fixed bottom-40 right-4 sm:right-6 z-50 w-[90vw] sm:w-[370px] flex flex-col"
          style={{
            background: "rgba(10, 10, 10, 0.97)",
            border: "1px solid rgba(0, 209, 255, 0.2)",
            borderRadius: "20px",
            boxShadow:
              "0 0 40px rgba(0, 209, 255, 0.1), 0 20px 60px rgba(0,0,0,0.6)",
            backdropFilter: "blur(20px)",
            height: "480px",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid rgba(0, 209, 255, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              borderRadius: "20px 20px 0 0",
              background: "rgba(0, 209, 255, 0.05)",
            }}
          >
            {/* AI Avatar */}
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #00d1ff, #0090cc)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                flexShrink: 0,
              }}
            >
              ✦
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "14px" }}>
                Nexo AI
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "inline-block",
                  }}
                />
                <span style={{ color: "#a1a1aa", fontSize: "11px" }}>
                  Online · NexoraStudio Assistant
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                color: "#a1a1aa",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                lineHeight: 1,
                padding: "4px",
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(0,209,255,0.2) transparent",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius:
                      msg.role === "user"
                        ? "16px 16px 4px 16px"
                        : "16px 16px 16px 4px",
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, #00d1ff, #0090cc)"
                        : "rgba(255,255,255,0.06)",
                    color: msg.role === "user" ? "#000" : "#e4e4e7",
                    fontSize: "13px",
                    lineHeight: "1.5",
                    fontWeight: msg.role === "user" ? 600 : 400,
                    border:
                      msg.role === "assistant"
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "none",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Loading dots */}
            {loading && (
              <div style={{ display: "flex", gap: "4px", padding: "8px 14px" }}>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#00d1ff",
                      display: "inline-block",
                      animation: `bounce 1s infinite ${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Quick replies — only show on first message */}
            {messages.length === 1 && !loading && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginTop: "4px",
                }}
              >
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q);
                      setTimeout(() => sendMessage(), 0);
                    }}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "20px",
                      border: "1px solid rgba(0, 209, 255, 0.3)",
                      background: "rgba(0, 209, 255, 0.08)",
                      color: "#00d1ff",
                      fontSize: "11px",
                      cursor: "pointer",
                      fontWeight: 600,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(0, 209, 255, 0.18)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(0, 209, 255, 0.08)";
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "12px 16px",
              borderTop: "1px solid rgba(0, 209, 255, 0.1)",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask anything about our services..."
              disabled={loading}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0, 209, 255, 0.2)",
                borderRadius: "12px",
                padding: "10px 14px",
                color: "#fff",
                fontSize: "13px",
                outline: "none",
                transition: "border 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(0, 209, 255, 0.6)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(0, 209, 255, 0.2)";
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background:
                  loading || !input.trim()
                    ? "rgba(0, 209, 255, 0.2)"
                    : "#00d1ff",
                border: "none",
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.2s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                  stroke={loading || !input.trim() ? "#555" : "#000"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          position: "fixed",
          bottom: "100px",
          right: "24px",
          zIndex: 50,
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: isOpen
            ? "rgba(0, 209, 255, 0.15)"
            : "linear-gradient(135deg, #00d1ff, #0090cc)",
          border: isOpen ? "2px solid #00d1ff" : "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 20px rgba(0, 209, 255, 0.4)",
          transition: "all 0.3s ease",
          fontSize: "22px",
        }}
        aria-label="Open AI Chat"
      >
        {isOpen ? (
          <span style={{ color: "#00d1ff", fontSize: "18px" }}>✕</span>
        ) : (
          <span>✦</span>
        )}
      </button>

      {/* Bounce animation */}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </>
  );
}
