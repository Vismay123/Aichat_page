import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TweetAssistant from "./components/TweetAssistant";
import ResearchInsights from "./components/ResearchInsights";
import GeneratedTweet from "./components/GeneratedTweet";
import Dashboard from "./components/Dashboard";

// LinkedIn Components
import LinkedinAssistant from "./components/LinkedinAssistant";
import LinkedinInsights from "./components/LinkedinInsights";
import GeneratedLinkedinPost from "./components/GeneratedLinkedinPost";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [linkedinSubmitted, setLinkedinSubmitted] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Navbar */}
          <nav className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold">AI Social Assistant</h1>
            <div className="flex gap-4">
              <Link to="/" className="text-blue-600 hover:underline">
                Twitter
              </Link>
              <Link to="/linkedin" className="text-blue-600 hover:underline">
                LinkedIn
              </Link>
              <Link to="/dashboard" className="text-blue-600 hover:underline">
                Dashboard
              </Link>
            </div>
          </nav>

          {/* Routes */}
          <Routes>
            {/* Twitter Page */}
            <Route
              path="/"
              element={
                <div>
                  <p className="text-sm text-gray-600 mb-6">
                    Research, generate, and review tweets with AI assistance
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <TweetAssistant onSubmit={() => setSubmitted(true)} />

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
              }
            />

            {/* LinkedIn Page */}
            <Route
              path="/linkedin"
              element={
                <div>
                  <p className="text-sm text-gray-600 mb-6">
                    Research, generate, and review LinkedIn posts with AI assistance
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <LinkedinAssistant onSubmit={() => setLinkedinSubmitted(true)} />

                    <div className="flex flex-col gap-6 md:col-span-1">
                      {linkedinSubmitted && (
                        <>
                          <LinkedinInsights />
                          <GeneratedLinkedinPost />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              }
            />

            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
