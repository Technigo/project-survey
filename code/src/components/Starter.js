/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import React from 'react';

const Starter = (props) => {
  const handleClick = () => {
    props.onButtonClick();
  }

  return (
    <div className="container start">
      <h1>Matildas TV support</h1>
      <div className="emojibox">
        <span role="img" className="emoji" aria-label="img">📺</span>
        <span role="img" className="emoji" aria-label="img">🍿</span>
      </div>
      <hr />
      <p>Do you ever feel like you're in the mood to cuddle down on the sofa with a bowl of snacks and put on a really nice tv-show?</p>
      <p>But, when scrolling on Netflix, you are overwhelmed by all the options available. You quickly call your friend and trusted tv-nerd Matilda to get help, but she is busy taking a nap and cannot respond.</p>
      <p>Your bowl of snacks is looking at you, dripping with disappointment.</p>
      <p>Fear no more! Matilda's TV support is here to help you find a good show to put on. We are filled with only shows that Matilda has seen and would recommend. Answer a few questions, and we will give you a suggestion.</p>
      <p>Let's get started!</p>
      <button className="startbtn" type="button" onClick={handleClick}>Start</button>
      <img src="https://i.postimg.cc/gjF9yC0z/pexels-jeshootscom-1040159.jpg" alt="picy" />
    </div>
  )
};

export default Starter;