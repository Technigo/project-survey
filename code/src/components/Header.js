import React, { useState, useRef } from 'react';
import backgroundMusic from 'assets/music/Jazz Night - Golden Age Radio.mp3';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

// styling
import 'styles/header.css'

export const Header = () => {
  // A variable importing the music file outside of the App function
  // because the toggling didn't work inside it for some reason:
  const bgMusic = new Audio(backgroundMusic);
  bgMusic.loop = true;

  const audioRef = useRef(bgMusic);

  const [isPlaying, setIsPlaying] = useState(false);
  // This little function plays the music when pressing the music button,
  // and turns it off when pressing again.
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }
  return (
    <header role="banner">
      <h1>Music Survey</h1>
      <button type="submit" className="button" onClick={togglePlay}><FontAwesomeIcon icon={faMusic} className="button__icon" />Play some Jazz
      </button>
    </header>
  )
}