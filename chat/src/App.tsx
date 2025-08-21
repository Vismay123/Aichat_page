import { useState } from "react";
import TweetAssistant from "./components/TweetAssistant";
import ResearchInsights from "./components/ResearchInsights";
import GeneratedTweet from "./components/GeneratedTweet";

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold">Tweet Assistant</h1>
        <p className="text-sm text-gray-600 mb-6">
          Research, generate, and review tweets with AI assistance
        </p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left side = AI Chat Assistant */}
          <TweetAssistant onSubmit={() => setSubmitted(true)} />

          {/* Right side = independent containers */}
          <div className="flex flex-col gap-6 md:col-span-1">
            {submitted && (
              <>
                <ResearchInsights />
                <GeneratedTweet />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
