import React from 'react';

interface WordBubblesProps {
  words: string[];
  selectedWords: string[];
  matchedPairs: string[];
  onWordClick: (word: string) => void;
}

const WordBubbles: React.FC<WordBubblesProps> = ({
  words,
  selectedWords,
  matchedPairs,
  onWordClick,
}) => {
  const getWordStyle = (word: string) => {
    if (matchedPairs.includes(word)) {
      return 'bg-gradient-to-br from-green-300 to-green-500 text-green-800 border-green-400 cursor-default transform scale-110';
    }
    if (selectedWords.includes(word)) {
      return 'bg-gradient-to-br from-yellow-300 to-yellow-500 text-yellow-800 border-yellow-400 transform scale-105';
    }
    return 'bg-gradient-to-br from-blue-300 to-purple-400 text-purple-800 border-purple-300 hover:scale-105 cursor-pointer';
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
      {words.map((word, index) => (
        <div
          key={`${word}-${index}`}
          onClick={() => onWordClick(word)}
          className={`
            relative rounded-full p-6 text-center font-bold text-xl
            border-4 shadow-lg transition-all duration-300
            min-h-[120px] flex items-center justify-center
            ${getWordStyle(word)}
          `}
        >
          {/* Bubble shine effect */}
          <div className="absolute top-2 left-2 w-4 h-4 bg-white/50 rounded-full"></div>
          
          <span className="relative z-10 text-2xl font-bold drop-shadow-sm">
            {word}
          </span>

          {/* Matched indicator */}
          {matchedPairs.includes(word) && (
            <div className="absolute -top-2 -right-2 text-2xl">
              ⭐
            </div>
          )}

          {/* Selection indicator */}
          {selectedWords.includes(word) && !matchedPairs.includes(word) && (
            <div className="absolute -top-2 -right-2 text-2xl animate-pulse">
              ✨
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WordBubbles;