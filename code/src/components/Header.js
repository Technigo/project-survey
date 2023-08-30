import React, { useState, useRef } from 'react';
import backgroundMusic from 'assets/music/Jazz Night - Golden Age Radio.mp3';
import headerLogo from 'assets/noun-music-1620687.png';
import musicLogo from 'assets/noun-music-6011738.png';

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
    <div className="header">
      <img src={headerLogo} alt="logo" className="header-logo" />
      <div className="cta__button">
        <button type="submit" className="music-btn" onClick={togglePlay}><img src={musicLogo} className="music-logo" alt="music" /></button>
      </div>
    </div>
  )
}