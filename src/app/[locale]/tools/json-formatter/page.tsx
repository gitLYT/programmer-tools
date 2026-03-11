'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function JsonFormatter() {
  const t = useTranslations('JsonFormatter');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleFormat = () => {
    try {
      if (!input.trim()) {
        setOutput('');
        setError('');
        return;
      }
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (e) {
      setError((e as Error).message);
      setOutput('');
    }
  };

  const handleMinify = () => {
    try {
      if (!input.trim()) {
        setOutput('');
        setError('');
        return;
      }
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError('');
    } catch (e) {
      setError((e as Error).message);
      setOutput('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('inputLabel')}</label>
          <textarea
            className="flex-grow min-h-[400px] w-full p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('placeholderInput')}
          />
        </div>

        {/* Output Section */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('outputLabel')}</label>
          <textarea
            className={`flex-grow min-h-[400px] w-full p-4 border rounded-lg font-mono text-sm resize-none outline-none ${
              error 
                ? 'border-red-500 bg-red-50 text-red-600' 
                : 'border-gray-300 bg-gray-50 text-gray-800'
            }`}
            value={error || output}
            readOnly
            placeholder={t('placeholderOutput')}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={handleFormat}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {t('format')}
        </button>
        <button
          onClick={handleMinify}
          className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
        >
          {t('minify')}
        </button>
        <button
          onClick={() => {
            setInput('');
            setOutput('');
            setError('');
          }}
          className="bg-red-50 text-red-600 border border-red-200 px-6 py-2 rounded-lg hover:bg-red-100 transition-colors font-medium ml-auto"
        >
          {t('clear')}
        </button>
      </div>
    </div>
  );
}
