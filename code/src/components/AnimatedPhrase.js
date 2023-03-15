import React, { useState, useEffect } from 'react';

const phrase = 'Find your perfect {word} mentor';
const words = ['front-end', 'back-end', 'Artificial intelligence', 'UX/UI'];

const AnimatedPhrase = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentWordIndex]);

  const wordToChange = '{word}';
  const phraseWithWord = phrase.replace(wordToChange, words[currentWordIndex]);

  return <h1>{phraseWithWord}</h1>;
};

export default AnimatedPhrase;