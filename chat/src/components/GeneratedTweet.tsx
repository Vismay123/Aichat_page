import { FaTwitter } from "react-icons/fa";

export default function GeneratedTweet() {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="text-red-500 font-semibold mb-2">👀 Generated Tweet</h3>

      {/* Text inside its own container */}
      <div className="border rounded-md p-3 bg-gray-50">
        <p className="text-sm text-gray-800">
          💡 Just discovered an amazing productivity hack that's saving me 2+
          hours daily. Sometimes the simplest solutions are the most powerful.
          What's your best productivity tip? #Productivity #WorkSmart
        </p>
      </div>

      <div className="flex justify-between items-center mt-3">
        <span className="text-xs text-gray-500">196/280 characters</span>
        <span className="text-xs text-green-600 font-semibold">
          Engagement Score: High
        </span>
      </div>

      <div className="mt-3 flex gap-2 w-full">
  <button className="flex-1 bg-red-500 text-white text-sm px-3 py-2 rounded-lg flex items-center justify-center gap-2">
    <FaTwitter className="text-white" /> Post Tweet
  </button>
  <button className="flex-1 border text-sm px-3 py-2 rounded-lg">
    Revise
  </button>
</div>

    </div>
  );
}
