"use client";
import { useState } from 'react';

export default function TestPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Test Page</h1>
      <p className="mb-4">This is a simple test page to verify the server is working.</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Count: {count}
      </button>
      <div className="mt-4 p-4 bg-green-100 rounded">
        <p>✅ Server is working if you can see this page!</p>
      </div>
    </div>
  );
}