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

  // Auto scroll to bottom
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
      console.error(error);
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

  // Floating button (closed state)
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 hover:scale-105 text-white rounded-full shadow-xl flex items-center justify-center text-2xl transition-all z-50"
        aria-label="Open chat"
      >
        <FaRobot />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[340px] h-[420px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <h3 className="text-sm font-semibold">AI Assistant</h3>

        <button
          onClick={() => {
            setIsOpen(false);
            setMessages([]);
          }}
          className="hover:bg-white/20 p-1 rounded-full transition"
        >
          <RxCross2 />
        </button>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50 text-sm">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 text-xs mt-10">
            Ask me about Mubashir’s skills, projects, or experience 🚀
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-3 py-2 rounded-2xl max-w-[75%] text-xs leading-relaxed shadow-sm ${
                msg.role === "user"
                  ? "bg-blue-600 text-white rounded-br-sm"
                  : "bg-white text-gray-800 border rounded-bl-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="px-3 py-2 text-xs bg-white border rounded-2xl text-gray-500 animate-pulse">
              AI is typing...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* INPUT */}
      <div className="p-3 border-t bg-white flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Type a message..."
          className="flex-1 text-sm px-3 py-2 border rounded-xl outline-none focus:border-blue-500"
          disabled={isLoading}
        />

        <button
          onClick={sendMessage}
          disabled={!input.trim() || isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm disabled:opacity-50 hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}