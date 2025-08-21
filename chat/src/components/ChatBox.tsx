import { useState } from "react";

type Message = {
  type: "user" | "assistant";
  text: string;
};

type ChatBoxProps = {
  onFirstMessage: () => void;
};

export default function ChatBox({ onFirstMessage }: ChatBoxProps) {
  const [responses, setResponses] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [firstMessageSent, setFirstMessageSent] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    // Fire callback only once on first message
    if (!firstMessageSent) {
      onFirstMessage();
      setFirstMessageSent(true);
    }

    // Add user message
    setResponses((prev) => [...prev, { type: "user", text: input }]);

    // Fake assistant reply
    setTimeout(() => {
      setResponses((prev) => [
        ...prev,
        { type: "assistant", text: "This is a reply from assistant" },
      ]);
    }, 500);

    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Container for all responses */}
      <div className="flex-1 overflow-y-auto p-3 border rounded-lg space-y-3 mb-4">
        {responses.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg max-w-md ${
              msg.type === "user"
                ? "bg-orange-300 self-end ml-auto text-right"
                : "bg-gray-100 self-start mr-auto text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border p-2 rounded-lg"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
