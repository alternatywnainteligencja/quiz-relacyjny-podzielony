import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { calculateBefore, calculateMarried, calculateCrisis, calculateDivorce } from '../calculations/calculations';

const QuestionScreen = ({ title, color, onResult, onBack, pathwayType }) => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    { id: 'q1', text: 'Przykładowe pytanie 1?', type: 'yesno' },
    { id: 'q2', text: 'Przykładowe pytanie 2?', type: 'yesno' },
  ];

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      let result;
      if (pathwayType === 'before') result = calculateBefore(newAnswers);
      else if (pathwayType === 'married') result = calculateMarried(newAnswers);
      else if (pathwayType === 'crisis') result = calculateCrisis(newAnswers);
      else if (pathwayType === 'divorce') result = calculateDivorce(newAnswers);
      onResult(result);
    }
  };

  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700 border-blue-500',
    green: 'bg-green-600 hover:bg-green-700 border-green-500',
    orange: 'bg-orange-600 hover:bg-orange-700 border-orange-500',
    red: 'bg-red-600 hover:bg-red-700 border-red-500',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4">
      <div className="max-w-2xl mx-auto py-8">
        <div className="bg-gray-800 rounded-lg shadow-2xl p-8 border border-gray-700">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Powrót
          </button>
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
          <div className="mb-4 text-sm text-gray-400">
            Pytanie {currentQuestion + 1} z {questions.length}
          </div>
          <p className="text-xl mb-8">{questions[currentQuestion].text}</p>
          <div className="space-y-3">
            <button
              onClick={() => handleAnswer('yes')}
              className={`w-full p-4 rounded-lg transition-colors border-2 ${colorClasses[color]}`}
            >
              Tak
            </button>
            <button
              onClick={() => handleAnswer('no')}
              className="w-full bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors border-2 border-gray-600"
            >
              Nie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
