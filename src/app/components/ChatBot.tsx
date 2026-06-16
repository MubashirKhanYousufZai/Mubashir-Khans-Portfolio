"use client";

import { useEffect, useRef, useState } from "react";
import { FaRobot } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
    };

    const currentInput = input;
    setInput("");

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data?.reply || "Sorry, I couldn't respond properly.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Network error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  /* ---------------- FLOAT BUTTON ---------------- */
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all hover:scale-110"
        aria-label="Open chat"
      >
        <FaRobot className="text-lg" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex h-[460px] w-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl shadow-[0_0_40px_rgba(59,130,246,0.25)]">

      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3">
        <div className="flex items-center gap-2">
          <FaRobot className="text-blue-400" />
          <h3 className="text-sm font-semibold text-white">
            AI Assistant
          </h3>
        </div>

        <button
          onClick={() => {
            setIsOpen(false);
            setMessages([]);
          }}
          className="rounded-full p-1 text-gray-400 transition hover:bg-white/10 hover:text-white"
        >
          <RxCross2 />
        </button>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 space-y-2 overflow-y-auto bg-gradient-to-b from-black/40 to-black/80 p-3 text-sm">
        {messages.length === 0 && (
          <div className="mt-10 text-center text-xs text-gray-500">
            Ask about Mubashir’s skills, projects, or experience 🚀
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-3 py-2 text-xs leading-relaxed shadow-md ${
                msg.role === "user"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm"
                  : "border border-white/10 bg-white/5 text-gray-200 backdrop-blur-md rounded-bl-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="animate-pulse rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-400">
              AI is typing...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* INPUT */}
      <div className="flex gap-2 border-t border-white/10 bg-black/60 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Ask something..."
          disabled={isLoading}
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
        />

        <button
          onClick={sendMessage}
          disabled={!input.trim() || isLoading}
          className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm text-white transition hover:scale-105 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}