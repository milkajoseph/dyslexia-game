import React from 'react';

const FloatingCharacters = () => {
  return (
    <>
      {/* Baby Girl Character - Left */}
      <div className="absolute top-20 left-8 animate-bounce z-20">
       <img 
          src="/girl.jpg"
          alt="Wootteo Character"
          className="w-24 h-24 rounded-full border-4 border-blue-300 shadow-lg object-cover"
        />
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 mt-2 text-center shadow-md">
          <span className="text-sm font-bold text-pink-600">Hi there! 👶</span>
        </div>
      </div>

      {/* Wootteo Character - Right */}
      <div className="absolute top-28 right-8 animate-bounce z-20">
        <img 
          src="/wootteo.jpg"
          alt="Wootteo Character"
          className="w-24 h-24 rounded-full border-4 border-blue-300 shadow-lg object-cover"
        />
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 mt-2 text-center shadow-md">
          <span className="text-sm font-bold text-blue-600">Let's play! 🎈</span>
        </div>
      </div>
    </>
  );
};

export default FloatingCharacters;
