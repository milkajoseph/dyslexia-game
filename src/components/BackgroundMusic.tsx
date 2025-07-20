import React, { useEffect } from 'react';

const BackgroundMusic: React.FC = () => {
  useEffect(() => {
    const createBackgroundMusic = () => {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        const audioContext = new AudioContext();

        const playNote = (
          frequency: number,
          duration: number,
          delay: number,
          type: OscillatorType = 'sine'
        ) => {
          setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.type = type;
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + duration);
          }, delay);
        };

        // 🎼 New playful melody with rhythm and rests
        const melody = [
          { note: 523.25, duration: 0.4, type: 'triangle' },  // C5
          { note: 659.25, duration: 0.4, type: 'square' },    // E5
          { note: 783.99, duration: 0.4, type: 'triangle' },  // G5
          { note: 523.25, duration: 0.4, type: 'square' },    // C5
          { note: 0, duration: 0.3 },                         // rest
          { note: 587.33, duration: 0.4, type: 'sawtooth' },  // D5
          { note: 698.46, duration: 0.4, type: 'triangle' },  // F5
          { note: 659.25, duration: 0.6, type: 'sine' },      // E5
        ];

        const playMelody = () => {
          let delay = 0;
          melody.forEach(({ note, duration, type }) => {
            if (note > 0) {
              playNote(note, duration, delay * 1000, type);
            }
            delay += duration;
          });

          // Loop the melody
          setTimeout(playMelody, delay * 1000 + 2000);
        };

        const startMusic = () => {
          if (audioContext.state === 'suspended') {
            audioContext.resume();
          }
          playMelody();
          document.removeEventListener('click', startMusic);
        };

        document.addEventListener('click', startMusic);

        return () => {
          document.removeEventListener('click', startMusic);
          audioContext.close();
        };
      } catch (error) {
        console.log('Audio not supported');
      }
    };

    createBackgroundMusic();
  }, []);

  return null;
};

export default BackgroundMusic;
