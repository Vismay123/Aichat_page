import { FiSearch } from "react-icons/fi";

export default function ResearchInsights() {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <div className="flex items-center gap-2 mb-2">
        <FiSearch className="text-red-500" />
        <h3 className="text-red-500 font-semibold">Research Insights</h3>
      </div>
      <p className="text-sm text-gray-600">
        Based on current trends: High engagement topics include AI/tech,
        productivity tips, and community building. Best posting times: 9–11 AM
        EST. Recommended hashtags: 2–3 relevant ones.
      </p>
    </div>
  );
}
