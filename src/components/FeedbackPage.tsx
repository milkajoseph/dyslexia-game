import React from 'react';
import { Home, Star, Trophy } from 'lucide-react';
import FloatingCharacters from './FloatingCharacters';

interface FeedbackPageProps {
  score: number;
  onBackToHome: () => void;
}

const FeedbackPage: React.FC<FeedbackPageProps> = ({ score, onBackToHome }) => {
  const getEncouragementMessage = () => {
    if (score >= 900) {
      return {
        title: "🌟 SUPER STAR! 🌟",
        message: "You're a rhyming champion! Every bubble was perfect!",
        emoji: "🏆"
      };
    } else if (score >= 700) {
      return {
        title: "🎉 FANTASTIC! 🎉",
        message: "Amazing job finding those rhyming words!",
        emoji: "⭐"
      };
    } else if (score >= 500) {
      return {
        title: "🎈 GREAT WORK! 🎈",
        message: "You're getting really good at rhyming!",
        emoji: "🎵"
      };
    } else {
      return {
        title: "🫧 KEEP TRYING! 🫧",
        message: "Every bubble you pop makes you better!",
        emoji: "💪"
      };
    }
  };

  const encouragement = getEncouragementMessage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 via-orange-200 to-pink-200 relative overflow-hidden">
      {/* Celebration bubbles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/40 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 50}px`,
              height: `${20 + Math.random() * 50}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <FloatingCharacters />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-4 border-yellow-300 text-center max-w-2xl">
          <div className="text-8xl mb-6">{encouragement.emoji}</div>
          
          <h1 className="text-4xl font-bold text-purple-700 mb-4">
            {encouragement.title}
          </h1>
          
          <p className="text-2xl text-purple-600 mb-8">
            {encouragement.message}
          </p>

          <div className="bg-gradient-to-r from-yellow-300 to-orange-300 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Trophy className="w-8 h-8 text-yellow-700" />
              <h3 className="text-3xl font-bold text-yellow-800">Your Score</h3>
              <Trophy className="w-8 h-8 text-yellow-700" />
            </div>
            <div className="text-5xl font-bold text-yellow-800">{score}</div>
            <div className="text-lg text-yellow-700 mt-2">out of 1000 points!</div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-purple-100 rounded-xl p-4">
              <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-purple-700">10</div>
              <div className="text-sm text-purple-600">Levels</div>
            </div>
            <div className="bg-pink-100 rounded-xl p-4">
              <div className="text-2xl mb-2">🫧</div>
              <div className="text-lg font-bold text-pink-700">50</div>
              <div className="text-sm text-pink-600">Words</div>
            </div>
            <div className="bg-blue-100 rounded-xl p-4">
              <div className="text-2xl mb-2">🎵</div>
              <div className="text-lg font-bold text-blue-700">25</div>
              <div className="text-sm text-blue-600">Rhyme Pairs</div>
            </div>
          </div>

          <button
            onClick={onBackToHome}
            className="w-full bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
          >
            <Home className="w-8 h-8" />
            Play Again!
          </button>

          <div className="mt-6 text-lg text-purple-600">
            🌟 You're becoming a rhyming expert! 🌟
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;