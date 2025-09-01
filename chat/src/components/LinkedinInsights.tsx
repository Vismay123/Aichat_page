import { FiSearch } from "react-icons/fi";

export default function LinkedinInsights() {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <div className="flex items-center gap-2 mb-2">
        <FiSearch className="text-blue-700" />
        <h3 className="text-blue-700 font-semibold">Research Insights</h3>
      </div>
      <p className="text-sm text-gray-600">
        Trending LinkedIn topics: Career growth, leadership, and AI in business.
        Best posting times: 8–10 AM local time. Suggested hashtags: #Leadership
        #CareerGrowth #AI
      </p>
    </div>
  );
}
