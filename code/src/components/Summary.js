/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable indent */
import React from 'react';

const refreshPage = () => {
  window.location.reload(false);
};
const Summary = ({
  name,
  mood,
  adjective,
  animal,
  exclamation,
  adjectiveSecond,
  creature,
  food,
}) => (
  <>
    <section className="summary-container">
      <div className="story-container">
        {' '}
        <div className="header-container">
          <h2 className="summary-title">The Dragon Sneeze</h2>
        </div>
        <div className="story-container-final">
          <p>
            <span className="input">{name}</span> was a{' '}
            <span className="input">{mood}</span> Dragon, who drove around town
            in a <span className="input">{adjective} </span>wagon.
          </p>
          <p>
            The Dragon was lonely, and said,
            <i> this is baloney, if I could find a friend, if only.</i>
          </p>
          <p>
            So the Dragon set out to find a companion.
            <i> A pet, he squealed, I’ll name it Brandon. </i>
          </p>
          <p>
            But the Dragon did not know what makes a good pet, he settled for a{' '}
            <span className="input">{animal}</span>,{' '}
            <i>that’s what I’ll get. </i>
          </p>
          <p>
            To the dragon’s dismay, this <span className="input">{animal}</span>{' '}
            only ate hay.{' '}
          </p>
          <p>
            <span className="input">{exclamation}</span> the Dragon raged,{' '}
            <i>my plan has failed.</i>{' '}
          </p>
          <p>
            <i>
              I can’t have hay in the house. If I sneeze it’ll burn down, no
              doubts!
            </i>{' '}
          </p>
          <p>
            So the Dragon now had a{' '}
            <span className="input">{adjectiveSecond}</span> dilemma.{' '}
            <i>
              {' '}
              I’ll have to build the <span className="input">{animal}</span> its
              own house,
            </i>
            he sighed, when a{' '}
          </p>
          <p>
            <span className="input">{creature}</span>, walked by and said.{' '}
            <i>I’m looking for a house. Pick me instead. </i>
          </p>
          <p>
            <i>
              I don’t want hay and I’m pretty tidy, and I’ll make{' '}
              <span className="input">{food}</span> every Friday.
            </i>
          </p>
          <p>
            That day it was decided, and <span className="red">{creature}</span>{' '}
            moved in, <span className="input">{name}</span> was so excited.
          </p>
          <p>For now he had a friend, and on the weekend,</p>
          <p>
            they would toast <span className="input">{food}</span> (yum) on the
            fire, that the Dragons sneezes provided.{' '}
          </p>
          <p>The End.</p>
        </div>
        <div className="restart-button">
          <button className="restart-btn" type="button" onClick={refreshPage}>
            Restart
          </button>
        </div>
      </div>
    </section>

    <footer className="footer-container">
      <h4 className="creator">Created & developed by</h4>
      <p className="creator">~ Saralie Bognandi ~</p>
      <h4 className="creator">Mad lib written by</h4>
      <p className="creator">~ Linda Edorsson ~</p>
    </footer>
  </>
);

export default Summary;
