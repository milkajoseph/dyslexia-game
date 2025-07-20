import React, { useState, useEffect } from 'react';
import { Home, Volume2 } from 'lucide-react';
import FloatingCharacters from './FloatingCharacters';
import BubbleMachine from './BubbleMachine';
import WordBubbles from './WordBubbles';
import { gameData } from '../data/gameData';

interface GamePageProps {
  level: number;
  onLevelComplete: (score: number) => void;
  onBackToHome: () => void;
}

const GamePage: React.FC<GamePageProps> = ({ level, onLevelComplete, onBackToHome }) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showPerformance, setShowPerformance] = useState(false);
  const [currentWords, setCurrentWords] = useState<string[]>([]);

  // 🔥 Performance tracking
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [mistakes, setMistakes] = useState(0);

  const levelData = gameData[level - 1];

  useEffect(() => {
    if (levelData) {
      setCurrentWords(levelData.words);
      setSelectedWords([]);
      setMatchedPairs([]);
      setShowCelebration(false);
      setShowPerformance(false);
      setStartTime(Date.now());
      setEndTime(null);
      setAttempts(0);
      setMistakes(0);
    }
  }, [level, levelData]);

  const handleWordClick = (word: string) => {
    if (matchedPairs.includes(word) || selectedWords.includes(word)) return;

    const newSelected = [...selectedWords, word];
    setSelectedWords(newSelected);

    if (newSelected.length === 2) {
      setAttempts((prev) => prev + 1);

      const [word1, word2] = newSelected;
      const rhymePair = levelData.rhymePairs.find(
        (pair) =>
          (pair[0] === word1 && pair[1] === word2) ||
          (pair[0] === word2 && pair[1] === word1)
      );

      if (rhymePair) {
        setTimeout(() => {
          setMatchedPairs((prev) => [...prev, ...newSelected]);
          setSelectedWords([]);
          speakWords(newSelected);

          if (matchedPairs.length + 2 === currentWords.length) {
            const now = Date.now();
            setEndTime(now);
            setShowCelebration(true);
            setTimeout(() => {
              setShowPerformance(true);
              onLevelComplete(100);
            }, 2500);
          }
        }, 500);
      } else {
        setMistakes((prev) => prev + 1);
        setTimeout(() => {
          setSelectedWords([]);
        }, 800);
      }
    }
  };

  const speakWords = (words: string[]) => {
    words.forEach((word, index) => {
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.rate = 0.9;
        utterance.pitch = 1.3;
        utterance.volume = 0.9;
        speechSynthesis.speak(utterance);
      }, index * 800);
    });
  };

  const savePerformanceData = () => {
    const duration = startTime && endTime ? Math.floor((endTime - startTime) / 1000) : 0;
    const accuracy = attempts > 0 ? Math.round(((attempts - mistakes) / attempts) * 100) : 0;

    const performance = {
      level,
      time: duration,
      attempts,
      mistakes,
      accuracy,
      timestamp: new Date().toISOString(),
    };

    console.log('📊 Game Performance:', performance);
    const history = JSON.parse(localStorage.getItem('gamePerformance') || '[]');
    localStorage.setItem('gamePerformance', JSON.stringify([...history, performance]));
  };

  useEffect(() => {
    if (showCelebration && endTime && startTime) {
      savePerformanceData();
    }
  }, [showCelebration, endTime, startTime]);

  if (!levelData) return null;

  const duration = startTime && endTime ? Math.floor((endTime - startTime) / 1000) : 0;
  const accuracy = attempts > 0 ? Math.round(((attempts - mistakes) / attempts) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${15 + Math.random() * 30}px`,
              height: `${15 + Math.random() * 30}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <FloatingCharacters />

      <div className="relative z-10 p-6">
        <div className="flex justify-between items-center">
          <button
            onClick={onBackToHome}
            className="bg-white/90 hover:bg-white text-purple-600 font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Home
          </button>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-700">
              Level {level} - {levelData.theme}
            </h2>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
            <Volume2 className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-8 pb-8">
        <div className="mb-8">
          <BubbleMachine />
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-purple-300 max-w-4xl w-full">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-purple-700 mb-2">
              🫧 Find the Rhyming Bubbles! 🫧
            </h3>
            <p className="text-lg text-purple-600">
              Click on words that sound the same at the end!
            </p>
          </div>

          <WordBubbles
            words={currentWords}
            selectedWords={selectedWords}
            matchedPairs={matchedPairs}
            onWordClick={handleWordClick}
          />

          {showCelebration && (
            <div className="text-center mt-6">
              <div className="text-6xl mb-4">🎉 ⭐ 🎈</div>
              <h4 className="text-3xl font-bold text-green-600 mb-2">Amazing Work!</h4>
              <p className="text-xl text-purple-600">You found all the rhyming pairs! 🌟</p>
            </div>
          )}

          {showPerformance && (
            <div className="mt-8 bg-purple-100 rounded-xl p-6 shadow-inner border border-purple-300">
              <h4 className="text-xl font-bold text-purple-800 mb-4">📊 Performance Metrics</h4>
              <p>⏱ Time Taken: <strong>{duration} seconds</strong></p>
              <p>🧠 Attempts: <strong>{attempts}</strong></p>
              <p>❌ Mistakes: <strong>{mistakes}</strong></p>
              <p>🎯 Accuracy: <strong>{accuracy}%</strong></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
