import React, { useState } from 'react';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import FeedbackPage from './components/FeedbackPage';
import BackgroundMusic from './components/BackgroundMusic';
import { AnimatePresence, motion } from "framer-motion";
export type GameState = 'home' | 'game' | 'feedback';

function App() {
  const [currentPage, setCurrentPage] = useState<GameState>('home');
  const [currentLevel, setCurrentLevel] = useState(1);
  const [score, setScore] = useState(0);

  const handleStartGame = () => {
    setCurrentPage('game');
    setCurrentLevel(1);
    setScore(0);
  };

  const handleLevelComplete = (levelScore: number) => {
    setScore(prev => prev + levelScore);
    if (currentLevel < 10) {
      setCurrentLevel(prev => prev + 1);
    } else {
      setCurrentPage('feedback');
    }
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setCurrentLevel(1);
    setScore(0);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundMusic />
      
      {currentPage === 'home' && (
        <HomePage onStartGame={handleStartGame} />
      )}
      
      {currentPage === 'game' && (
        <GamePage 
          level={currentLevel}
          onLevelComplete={handleLevelComplete}
          onBackToHome={handleStartGame}
        />
      )}
      
      {currentPage === 'feedback' && (
        <FeedbackPage 
          score={score}
          onBackToHome={handleStartGame}
        />
      )}
    </div>

  );
}

export default App;