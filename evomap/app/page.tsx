import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                EvoMap
              </h1>
              <p className="ml-4 text-sm text-gray-500">
                Evolutionary Viral & Bacterial Outbreak Data
              </p>
            </div>
            <nav className="flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
              <Link href="/map" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Global Map
              </Link>
              <Link href="/phylogenetic" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Phylogenetic Tree
              </Link>
              <Link href="/search" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Search
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Welcome to EvoMap
            </h2>
            <p className="text-gray-600 mb-6">
              Democratizing access to evolutionary viral and bacterial outbreak data through interactive visualizations.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-blue-800">Total Sequences</h3>
                <p className="text-2xl font-bold text-blue-900">1,247</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-green-800">Active Outbreaks</h3>
                <p className="text-2xl font-bold text-green-900">23</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-yellow-800">New Mutations</h3>
                <p className="text-2xl font-bold text-yellow-900">156</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-purple-800">Countries</h3>
                <p className="text-2xl font-bold text-purple-900">89</p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Global Map</h3>
                <p className="text-gray-600 mb-4">
                  Interactive map showing outbreak locations and pathogen distribution worldwide.
                </p>
                <Link href="/map" className="text-blue-600 hover:text-blue-800 font-medium">
                  Explore Map →
                </Link>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Phylogenetic Tree</h3>
                <p className="text-gray-600 mb-4">
                  Visualize evolutionary relationships and mutation patterns across viral lineages.
                </p>
                <Link href="/phylogenetic" className="text-blue-600 hover:text-blue-800 font-medium">
                  View Tree →
                </Link>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Search</h3>
                <p className="text-gray-600 mb-4">
                  Search and filter data by pathogen, location, mutations, and time period.
                </p>
                <Link href="/search" className="text-blue-600 hover:text-blue-800 font-medium">
                  Search Data →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  New SARS-CoV-2 variant detected in South Africa
                </span>
                <span className="text-xs text-gray-400">2 hours ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  Influenza H3N2 outbreak reported in Australia
                </span>
                <span className="text-xs text-gray-400">1 day ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  1,247 new sequences uploaded to database
                </span>
                <span className="text-xs text-gray-400">3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
