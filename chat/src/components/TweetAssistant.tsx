import { useState } from "react";
import { FiSend} from "react-icons/fi";

interface Props {
  onSubmit: () => void;
}

interface Message {
  type: "user" | "assistant";
  text: string;
}

export default function TweetAssistant({ onSubmit }: Props) {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "assistant",
      text: "Hi! I'm your Tweet Assistant. I can help you research topics, generate tweets, and review them before posting. What would you like to create today?",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      // Add user message
      setMessages((prev) => [...prev, { type: "user", text: prompt }]);

      // Add AI response (dummy for now)
      setMessages((prev) => [
        ...prev,
        {
          type: "assistant",
          text: "Great idea! I'll craft a tweet that captures your message while maximizing engagement. Here’s what I found...",
        },
      ]);

      onSubmit();
      setPrompt("");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border md:col-span-2 flex flex-col">
      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <FiSend className="text-red-500 text-lg" />
        <h2 className="text-lg font-semibold">AI Chat Assistant</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 mb-4 p-4 bg-gray-50 rounded-lg border overflow-y-auto max-h-96 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-lg inline-block break-words max-w-[70%] ${
                msg.type === "user"
                  ? "bg-orange-400 text-white text-right"
                  : "bg-gray-200 text-gray-900 text-left"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex gap-2">
  <textarea
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}
    placeholder="Ask me to research a topic, generate a tweet, or help with content ideas..."
    className="flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-none"
    rows={3}
  />

  <button
    type="submit"
    className="bg-red-500 text-white w-12 h-12 rounded-lg flex items-center justify-center"
  >
    <FiSend />
  </button>
</form>

    </div>
  );
}
