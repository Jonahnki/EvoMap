'use client';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          EvoMap Dashboard
        </h1>
        <p className="text-gray-600 mb-6">
          Real-time analytics and outbreak monitoring dashboard.
        </p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Outbreaks</h3>
          <div className="text-3xl font-bold text-red-600">23</div>
          <p className="text-sm text-gray-500">Across 15 countries</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Sequences Analyzed</h3>
          <div className="text-3xl font-bold text-blue-600">12,847</div>
          <p className="text-sm text-gray-500">This month</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">New Mutations</h3>
          <div className="text-3xl font-bold text-green-600">156</div>
          <p className="text-sm text-gray-500">Detected this week</p>
        </div>
      </div>
      
      {/* Charts placeholder */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Outbreak Trends
        </h2>
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <div className="text-gray-500 mb-4">
            📊 Chart Component Placeholder
          </div>
          <p className="text-sm text-gray-400">
            Trend visualization will be implemented here
          </p>
        </div>
      </div>
    </div>
  );
}
