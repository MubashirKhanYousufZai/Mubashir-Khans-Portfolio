"use client";

import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false); // Controls open/close
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const { reply } = await res.json();
      if (reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, something went wrong!" }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Network error—try again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  // If chat is closed → show only floating button
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center text-2xl transition-all duration-200 z-50"
        aria-label="Open AI Assistant"
      >
        <FaRobot />
      </button>
    );
  }

  // Chat is open → full widget
  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Header */}
      <div className="p-3 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
        <h3 className="text-sm font-semibold">Mubashir's AI Robot Face</h3>
        <button
          onClick={() => {
            setIsOpen(false);
            setMessages([]); // Optional: clear chat on close
          }}
          className="text-white hover:bg-blue-700 rounded-full p-1 transition"
          aria-label="Close chat"
        >
          <RxCross2 />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-3 overflow-y-auto bg-gray-50 text-sm">
        {messages.length === 0 && (
          <p className="text-gray-500 text-center mt-6 text-xs">
            Ask me about Mubashir's skills or projects!
          </p>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block p-2 rounded-lg max-w-xs text-xs ${
                msg.role === "user" ? "bg-blue-100 text-blue-900" : "bg-green-100 text-green-900"
              }`}
            >
              {msg.content}
            </span>
          </div>
        ))}
        {isLoading && <p className="text-xs text-gray-500 animate-pulse">Typing...</p>}
      </div>

      {/* Input Area */}
      <div className="p-3 border-t flex gap-1">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && !isLoading && sendMessage()}
          placeholder="Ask me anything..."
          className="flex-1 p-2 text-sm border rounded-l-lg outline-none focus:border-blue-500"
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || !input.trim()}
          className="px-3 bg-blue-600 text-white rounded-r-lg text-sm disabled:opacity-50 hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}