/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import React from 'react';

const Starter = (props) => {
  const handleClick = () => {
    props.onButtonClick();
  }

  return (
    <div className="start-container">
      <div className="start-heading">
        <h1>Matildas TV support</h1>
        <div className="emojibox">
          <span role="img" className="emoji" aria-label="tv emoji">📺</span>
          <span role="img" className="emoji" aria-label="popcorn emoji">🍿</span>
        </div>
        <hr />
      </div>
      <div className="start-text">
        <p>Do you ever feel like you're in the mood to cuddle down on the sofa with a bowl of snacks and put on a really nice tv-show?</p>
        <p>But, when scrolling on Netflix, you are overwhelmed by all the options available. You quickly call your friend and trusted tv-nerd Matilda to get help, but she is busy taking a nap and cannot respond.</p>
        <p>Your bowl of snacks is looking at you, dripping with disappointment.</p>
        <p><span className="emphasis">Fear no more!</span> Matilda's TV support is here to help you find a good show to put on. We are filled with only shows that Matilda has seen and would recommend. Answer a few questions, and we will give you a suggestion.</p>
        <p>Let's get started!</p>
      </div>
      <button className="startbtn" type="button" onClick={handleClick} aria-label="Button named Start" aria-hidden="false">Start</button>
      <img src="https://i.postimg.cc/gjF9yC0z/pexels-jeshootscom-1040159.jpg" className="start-img" alt="woman watching tv" aria-label="image of woman watching tv" />
    </div>
  )
};

export default Starter;