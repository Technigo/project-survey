import React from 'react';

export const Header = ({onStartClick}) => {

  return (
    <header className="intro-text">
      <h1 tabIndex="0">WHAT'S YOUR SPIRIT ANIMAL?</h1>
      <p tabIndex="0">Answer three simple questions and find out!</p>
      <button onClick={onStartClick}>Start the test</button>
    </header>
  )

}