/* eslint-disable max-len */
import React from 'react';
import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

export const Party = ({ name, place, food, drink }) => {
  return (
    <>
      <div className="party-name">
        <h1>{name}</h1>
      </div>
      <div className="party-text">
        <p>🌪! Wow you&apos;ve just arrived at your dream place {place}! And look, a table with {food} and {drink}! All your favourite people is here, the weather is dreamy and we&apos;re having a party just for you! Add some more partyfeeling? </p>
        <h3>↓</h3>
      </div>

      <div className="party-btn">
        <button
          type="submit"
          className="partyBtn"
          onClick={() => {
            (jsConfetti.addConfetti({
              confettiRadius: 8,
              confettiNumber: 500,
              confettiColors: [
                '#d44e62', '#fcfee1', '#eebed9', '#b4c8b7', '#fb91c6', '#a0bbd0'
              ]
            }))
          }}>MAGIC PARTYBUTTON
        </button>

      </div>
    </>
  );
};