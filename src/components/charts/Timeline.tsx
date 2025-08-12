import React, { useState } from 'react';
import { OutbreakData } from '@/lib/types';

interface TimelineProps {
  outbreaks: OutbreakData[];
  onScrub?: (date: Date) => void;
}

const Timeline: React.FC<TimelineProps> = ({ outbreaks, onScrub }) => {
  // Placeholder: just show a slider for date range
  const dates = outbreaks.map(o => new Date(o.date)).sort((a, b) => a.getTime() - b.getTime());
  const [currentIdx, setCurrentIdx] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idx = Number(e.target.value);
    setCurrentIdx(idx);
    if (onScrub) onScrub(dates[idx]);
  };
  if (dates.length === 0) return <div>No data</div>;
  return (
    <div className="w-full p-4 bg-white dark:bg-gray-800 rounded shadow">
      <div className="mb-2">Timeline (Mock)</div>
      <input
        type="range"
        min={0}
        max={dates.length - 1}
        value={currentIdx}
        onChange={handleChange}
        className="w-full"
      />
      <div className="text-center mt-2 text-sm">
        {dates[currentIdx].toLocaleDateString()}
      </div>
      {/* Animation controls placeholder */}
      <div className="flex justify-center gap-2 mt-2">
        <button className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">⏮️</button>
        <button className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">⏯️</button>
        <button className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">⏭️</button>
      </div>
    </div>
  );
};

export default Timeline;