import React from 'react';

const BubbleMachine: React.FC = () => {
  return (
    <div className="relative">
      {/* Bubble Machine */}
      <div className="bg-gradient-to-b from-purple-400 to-purple-600 rounded-3xl p-6 shadow-2xl border-4 border-purple-300">
        <div className="bg-white/90 rounded-2xl p-4 mb-4">
          <div className="text-center">
            <div className="text-3xl mb-2">🫧</div>
            <div className="text-lg font-bold text-purple-700">Bubble Machine</div>
            <div className="text-sm text-purple-600">Creating magical words!</div>
          </div>
        </div>
        
        {/* Machine controls */}
        <div className="flex justify-center gap-3">
          <div className="w-4 h-4 bg-red-400 rounded-full shadow-inner"></div>
          <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-inner"></div>
          <div className="w-4 h-4 bg-green-400 rounded-full shadow-inner"></div>
        </div>
      </div>

      {/* Floating bubbles coming from machine */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/60 animate-bounce"
            style={{
              left: `${(i - 2) * 15}px`,
              top: `${-i * 10}px`,
              width: `${15 + i * 3}px`,
              height: `${15 + i * 3}px`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '2s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BubbleMachine;