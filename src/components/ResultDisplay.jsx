import React from 'react';
import { ArrowLeft } from 'lucide-react';

const ResultDisplay = ({ result, onRestart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4">
      <div className="max-w-2xl mx-auto py-8">
        <div className="bg-gray-800 rounded-lg shadow-2xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6">Wynik analizy</h2>
          <div className="space-y-4 mb-8">
            <p className="text-lg">{result}</p>
          </div>
          <button
            onClick={onRestart}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
            Powrót do początku
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
