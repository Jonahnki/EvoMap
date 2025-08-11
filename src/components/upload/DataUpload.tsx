import React, { useState } from 'react';

const DataUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState({ description: '' });
  const [preview, setPreview] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
    setPreview(f ? f.name : null);
  };

  const handleMetaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMetadata({ ...metadata, [e.target.name]: e.target.value });
  };

  const handleUpload = () => {
    setProgress(100); // Mock progress
    // No real upload logic
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-2">Data Upload (Mock)</h2>
      <input type="file" accept=".csv,.json,.fasta" onChange={handleFileChange} className="mb-2" />
      {preview && <div className="mb-2">Selected: {preview}</div>}
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={metadata.description}
        onChange={handleMetaChange}
        className="mb-2 w-full p-1 border rounded"
      />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        disabled={!file}
      >
        Upload
      </button>
      {progress > 0 && <div className="mt-2">Progress: {progress}%</div>}
      <div className="mt-2 text-xs text-gray-500">* This is a placeholder. No data is actually uploaded.</div>
    </div>
  );
};

export default DataUpload;