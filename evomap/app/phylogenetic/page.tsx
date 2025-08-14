'use client';

export default function PhylogeneticPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Phylogenetic Tree Viewer
        </h1>
        <p className="text-gray-600 mb-6">
          Interactive evolutionary tree visualization for pathogen analysis.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <div className="text-gray-500 mb-4">
            🌳 Phylogenetic Tree Component
          </div>
          <p className="text-sm text-gray-400">
            Tree visualization component will be implemented here
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Tree Controls
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
            Zoom In
          </button>
          <button className="p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
            Reset View
          </button>
          <button className="p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
            Export SVG
          </button>
        </div>
      </div>
    </div>
  );
}
