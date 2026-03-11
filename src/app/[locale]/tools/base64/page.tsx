'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Base64Converter() {
  const t = useTranslations('Base64');
  const [text, setText] = useState('');
  const [base64, setBase64] = useState('');

  const handleEncode = (value: string) => {
    setText(value);
    try {
      setBase64(btoa(value));
    } catch (e) {
      setBase64(t('invalidInput'));
    }
  };

  const handleDecode = (value: string) => {
    setBase64(value);
    try {
      setText(atob(value));
    } catch (e) {
      setText(t('invalidBase64'));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('textLabel')}</label>
          <textarea
            className="flex-grow min-h-[300px] w-full p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            value={text}
            onChange={(e) => handleEncode(e.target.value)}
            placeholder={t('placeholderText')}
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('base64Label')}</label>
          <textarea
            className="flex-grow min-h-[300px] w-full p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            value={base64}
            onChange={(e) => handleDecode(e.target.value)}
            placeholder={t('placeholderBase64')}
          />
        </div>
      </div>
      
       <div className="mt-6 flex justify-end">
        <button
          onClick={() => {
            setText('');
            setBase64('');
          }}
          className="bg-red-50 text-red-600 border border-red-200 px-6 py-2 rounded-lg hover:bg-red-100 transition-colors font-medium"
        >
          {t('clearAll')}
        </button>
      </div>
    </div>
  );
}
