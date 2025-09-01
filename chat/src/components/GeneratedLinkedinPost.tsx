import { FaLinkedin } from "react-icons/fa";

export default function GeneratedLinkedinPost() {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="text-blue-700 font-semibold mb-2">👔 Generated LinkedIn Post</h3>

      <div className="border rounded-md p-3 bg-gray-50">
        <p className="text-sm text-gray-800">
          🚀 Excited to share that I just explored a powerful productivity
          framework that's transforming the way I work. Collaboration +
          consistency = success. What’s your go-to work hack? #Leadership
          #Productivity
        </p>
      </div>

      <div className="flex justify-between items-center mt-3">
        <span className="text-xs text-gray-500">1020/1300 characters</span>
        <span className="text-xs text-green-600 font-semibold">
          Engagement Score: High
        </span>
      </div>

      <div className="mt-3 flex gap-2 w-full">
        <button className="flex-1 bg-blue-700 text-white text-sm px-3 py-2 rounded-lg flex items-center justify-center gap-2">
          <FaLinkedin className="text-white" /> Post on LinkedIn
        </button>
        <button className="flex-1 border text-sm px-3 py-2 rounded-lg">
          Revise
        </button>
      </div>
    </div>
  );
}
