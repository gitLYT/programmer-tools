'use client';

import { useState, useEffect } from 'react';

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState<string>('');
  const [dateString, setDateString] = useState<string>('');
  const [currentTimestamp, setCurrentTimestamp] = useState<number>(Math.floor(Date.now() / 1000));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimestamp(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTimestampChange = (val: string) => {
    setTimestamp(val);
    const ts = parseInt(val);
    if (!isNaN(ts)) {
      // Handle both seconds and milliseconds
      const date = new Date(val.length > 10 ? ts : ts * 1000);
      setDateString(date.toLocaleString());
    } else {
      setDateString('Invalid Timestamp');
    }
  };

  const handleDateChange = (val: string) => {
    setDateString(val);
    const date = new Date(val);
    if (!isNaN(date.getTime())) {
      setTimestamp(Math.floor(date.getTime() / 1000).toString());
    } else {
      setTimestamp('Invalid Date');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Timestamp Converter</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8 text-center">
        <p className="text-sm text-blue-600 font-medium">Current Unix Timestamp</p>
        <p className="text-4xl font-mono font-bold text-blue-800 mt-2">{currentTimestamp}</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Unix Timestamp (Seconds)</label>
          <div className="flex gap-2">
             <input
              type="text"
              className="flex-grow p-3 border border-gray-300 rounded-lg font-mono focus:ring-2 focus:ring-blue-500 outline-none"
              value={timestamp}
              onChange={(e) => handleTimestampChange(e.target.value)}
              placeholder="e.g. 1678886400"
            />
            <button 
                onClick={() => handleTimestampChange(currentTimestamp.toString())}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm font-medium text-gray-700"
            >
                Now
            </button>
          </div>
        </div>

        <div className="flex justify-center">
            <span className="text-gray-400">⇅</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date String (Local)</label>
          <input
            type="text" // Using text to allow flexible input, could be datetime-local
            className="w-full p-3 border border-gray-300 rounded-lg font-mono focus:ring-2 focus:ring-blue-500 outline-none"
            value={dateString}
            onChange={(e) => handleDateChange(e.target.value)}
            placeholder="e.g. 2023-03-15 10:00:00"
          />
        </div>
      </div>
    </div>
  );
}
