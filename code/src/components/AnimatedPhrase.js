import React, { useState, useEffect } from 'react';
import './AnimatedPhrase.css'; // Import CSS file

const words = ['Front-end', 'Back-end', 'AI', 'UX/UI'];

const AnimatedPhrase = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(intervalId);
  }, [currentWordIndex]);

  const phraseWithWord = words[currentWordIndex];

  return (
    <h1 className="compleate-phrase">
      <span className="find-your">Find your</span>
      <span className="perfect">perfect</span>
      <span className="word-wrapper"><span className="word">{phraseWithWord}</span></span>
      <span className="mentor">mentor</span>
    </h1>
  );
};

export default AnimatedPhrase;

