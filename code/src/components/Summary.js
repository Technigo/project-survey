/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable indent */
import React from 'react';

const refreshPage = () => {
  window.location.reload(false);
};
const Summary = ({
  name,
  radioButton,
  adjective,
  animal,
  exclamation,
  adjectiveSecond,
  creature,
}) => (
  <>
    <section className="summary-container">
      <div className="story-container">
        {' '}
        <h2 className="summary-title">Mad Lib – Dragon Sneeze</h2>
        <div className="story-container-final">
          <p>
            <span className="red">{name}</span> was a{' '}
            <span className="red">{radioButton}</span> Dragon, who drove around
            town in a <span className="red">{adjective} </span>wagon.
          </p>
          <p>
            The Dragon was lonely, and said, this is baloney, if I could find a
            friend, if only.
          </p>
          <p>
            So the dragon set out to find a companion. A pet, he squealed, I’ll
            name it Brandon.{' '}
          </p>
          <p>
            But the Dragon did not know what makes a good pet, he settled for a{' '}
            <span className="red">{animal}</span>, that’s what I’ll get.{' '}
          </p>
          <p>
            To the dragon’s dismay, this <span className="red">{animal}</span>{' '}
            only ate hay.{' '}
          </p>
          <p>
            <span className="red">{exclamation}!</span> the dragon raged, my
            plan has failed. I can’t have hay in the house. If I sneeze it’ll
            burn down, no doubts!{' '}
          </p>
          <p>
            So the dragon now had a{' '}
            <span className="red">{adjectiveSecond}</span> dilemma. I’ll have to
            build the <span className="red">{animal}</span> its own house, he
            sighed, when a{' '}
          </p>
          <p>
            <span className="red">{creature}</span>, walked by and said. I’m
            looking for a house. Pick me instead.{' '}
          </p>
          <p>
            I don’t want hay and I’m pretty tidy, and I’ll make name a
            foodstuffs__________ every Friday.
          </p>
          <p>
            That day it was decided, the <span className="red">{creature}</span>{' '}
            moved in, the Dragon was so excited.
          </p>
          <p>For now he had a friend, and on the weekend,</p>
          <p>
            they would toast marshmallows/apples/bubble-gum pie (yum) on the
            fire that the Dragons sneezes provided.{' '}
          </p>
          <p>The End.</p>
        </div>
        <div className="restart-button">
          <button className="restart-btn" type="button" onClick={refreshPage}>
            Again
          </button>
        </div>
      </div>
    </section>
    <footer className="footer-container">
      <h4 className="creator">Created & developed by</h4>
      <p className="creator">~ Saralie Bognandi ~</p>
      <h4 className="creator">Written by</h4>
      <p className="creator">~ Linda Edorsson ~</p>
    </footer>
  </>
);

export default Summary;
