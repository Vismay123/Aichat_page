import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Area, 
  AreaChart 
} from "recharts";

const data = [
  { date: "Jan 1", engagement: 1150 },
  { date: "Jan 2", engagement: 1350 },
  { date: "Jan 3", engagement: 1200 },
  { date: "Jan 4", engagement: 1550 },
  { date: "Jan 5", engagement: 1750 },
  { date: "Jan 6", engagement: 2000 },
  { date: "Jan 7", engagement: 1850 },
];

export default function Dashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-sm text-gray-600">
            Monitor your Twitter performance and engagement metrics
          </p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-gray-500 text-sm">Total Impressions</h3>
            <p className="text-2xl font-bold">127.5K</p>
            <p className="text-green-600 text-xs mt-1">↑ 12.5% from last week</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-gray-500 text-sm">Engagement Rate</h3>
            <p className="text-2xl font-bold">4.2%</p>
            <p className="text-red-600 text-xs mt-1">↓ 2.1% from last week</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-gray-500 text-sm">Followers</h3>
            <p className="text-2xl font-bold">3,247</p>
            <p className="text-green-600 text-xs mt-1">↑ 8.3% from last week</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-gray-500 text-sm">Profile Visits</h3>
            <p className="text-2xl font-bold">1,892</p>
            <p className="text-green-600 text-xs mt-1">↑ 15.7% from last week</p>
          </div>
        </div>

        {/* Chart + Recent Tweets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Engagement Over Time */}
          <div className="bg-white p-6 rounded-xl shadow border md:col-span-2">
            <h3 className="text-gray-800 font-semibold mb-4">
              Tweet Engagement Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="engagement"
                  stroke="#ef4444"
                  fillOpacity={1}
                  fill="url(#colorEngagement)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Tweets */}
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-gray-800 font-semibold mb-4">Recent Tweets</h3>
            <div className="space-y-4 text-sm">
              <div className="p-4 bg-gray-50 rounded-lg">
                Just launched our new product feature! 🚀
                <div className="flex gap-4 text-xs text-gray-500 mt-2">
                  <span>❤️ 156</span> <span>💬 46</span> <span>🔁 31</span> <span>2h ago</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                Great insights from today’s industry conference 👇
                <div className="flex gap-4 text-xs text-gray-500 mt-2">
                  <span>❤️ 89</span> <span>💬 26</span> <span>🔁 17</span> <span>6h ago</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                Behind the scenes look at our dev process. Transparency is key! 🔑
                <div className="flex gap-4 text-xs text-gray-500 mt-2">
                  <span>❤️ 234</span> <span>💬 70</span> <span>🔁 46</span> <span>1d ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
