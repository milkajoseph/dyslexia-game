import React from 'react';
import { Play, Volume2 } from 'lucide-react';
import FloatingCharacters from './FloatingCharacters';

interface HomePageProps {
  onStartGame: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartGame }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      {/* Floating bubbles background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <FloatingCharacters />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-purple-800 mb-4 drop-shadow-lg">
            🫧 Rhyme Time 🫧
          </h1>
          <h2 className="text-3xl font-semibold text-pink-700 mb-2">
            With Wootteo and Friends!
          </h2>
          <p className="text-xl text-purple-600 max-w-2xl mx-auto leading-relaxed">
            Join our magical bubble adventure! Help the baby girl create rhyming words 
            with her special bubble machine. Perfect for learning phonics and having fun!
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-pink-300">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🎈 🧸 🎵</div>
            <h3 className="text-2xl font-bold text-purple-700 mb-2">Ready to Play?</h3>
            <p className="text-lg text-gray-600">
              15 magical levels • 60 rhyming words • Lots of fun!
            </p>
          </div>

          <button
            onClick={onStartGame}
            className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
          >
            <Play className="w-8 h-8" />
            Start Bubble Adventure!
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Volume2 className="w-4 h-4" />
            <span>Turn on sound for the best experience!</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-purple-600 font-medium">
            🌟 Designed especially for young learners 🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;