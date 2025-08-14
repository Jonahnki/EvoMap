'use client';
import { useState } from 'react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('pathogen');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Advanced Data Search
        </h1>
        <p className="text-gray-600 mb-6">
          Search across pathogen databases, genomic sequences, and outbreak data.
        </p>
        
        {/* Search Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Type
            </label>
            <select 
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="pathogen">Pathogen Name</option>
              <option value="location">Geographic Location</option>
              <option value="mutation">Mutation/Lineage</option>
              <option value="sequence">Sequence ID</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Query
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter search terms..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Search Database
          </button>
        </div>
      </div>
      
      {/* Data Upload Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Data Upload Interface
        </h2>
        <p className="text-gray-600 mb-4">
          Upload your genomic data files for analysis and visualization.
        </p>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <div className="text-gray-500 mb-4">
            📁 Drag and drop files here
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Supported formats: CSV, JSON, FASTA, Newick, phyloXML
          </p>
          <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200">
            Choose Files
          </button>
        </div>
      </div>
      
      {/* Search Results */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Search Results
        </h2>
        <div className="text-center text-gray-500 py-8">
          No search results yet. Perform a search to see results here.
        </div>
      </div>
    </div>
  );
}
