import React, { useState } from 'react';
import { ScrollText } from 'lucide-react';
import CoinToss from './components/CoinToss';
import Hexagram from './components/Hexagram';
import HexagramInterpretation from './components/HexagramInterpretation';
import { calculateHexagramNumber } from './utils/hexagramCalculator';
import { hexagrams } from './data/hexagrams';

function App() {
  const [question, setQuestion] = useState('');
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const [lines, setLines] = useState<number[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [error, setError] = useState(false);

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      setIsQuestionSubmitted(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleTossComplete = (value: number) => {
    setLines([...lines, value]);
    setCurrentLine(currentLine + 1);
  };

  const resetConsultation = () => {
    setQuestion('');
    setIsQuestionSubmitted(false);
    setLines([]);
    setCurrentLine(0);
    setError(false);
  };

  const hexagramNumber = lines.length === 6 ? calculateHexagramNumber(lines) : null;
  const currentHexagram = hexagramNumber ? hexagrams[hexagramNumber - 1] : null;

  return (
    <div className="min-h-screen bg-black relative">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Align.</h1>
          <p className="text-gray-400">Consult the Book of Changes</p>
        </header>

        {!isQuestionSubmitted ? (
          <form onSubmit={handleQuestionSubmit} className="space-y-6">
            <div className="relative">
              <ScrollText className="absolute left-3 top-3 text-gray-400 w-6 h-6" />
              <input
                type="text"
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                  setError(false);
                }}
                placeholder={error ? "What guidance do you seek!" : "What guidance do you seek?"}
                className={`w-full pl-12 pr-4 py-3 rounded-lg bg-gray-900 border ${
                  error ? 'border-red-500 placeholder-red-500' : 'border-gray-800 placeholder-gray-500'
                } text-white focus:border-gray-600 focus:ring-1 focus:ring-gray-600 outline-none transition-all duration-300`}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-100"
            >
              Seek Wisdom
            </button>
          </form>
        ) : (
          <div className="space-y-8">
            <p className="text-gray-400 italic text-center text-lg">"{question}"</p>

            <div className="flex flex-col items-center space-y-8">
              {lines.length < 6 && <CoinToss onTossComplete={handleTossComplete} />}
              
              <div className="flex flex-col md:flex-row gap-8 items-start justify-center w-full">
                <div className={`transition-all duration-500 ${lines.length === 6 ? 'md:w-1/3' : 'w-full'}`}>
                  {lines.length > 0 && <Hexagram lines={lines} />}
                </div>
                
                {currentHexagram && lines.length === 6 && (
                  <div className="md:w-2/3">
                    <HexagramInterpretation hexagram={currentHexagram} />
                  </div>
                )}
              </div>
              
              {lines.length === 6 && (
                <button
                  onClick={resetConsultation}
                  className="bg-white text-black font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-gray-100"
                >
                  New Consultation
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-4 right-4 text-white text-sm opacity-50">
        Built by Jack <span className="ml-1">♡</span>
      </div>
    </div>
  );
}

export default App;