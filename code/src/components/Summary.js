/* eslint-disable react/self-closing-comp */
/* eslint-disable indent */
import React from 'react';

const refreshPage = () => {
  window.location.reload(false);
};
const Summary = () => {
  return (
    <>
      <section className="summary-container">
        <div className="story-container">
          {' '}
          <h2 className="summary-title">Mad Lib – Dragon Sneeze</h2>
          <p className="summary-answer">
            Name was a terrible/kind/constipated/sexy Dragon, who drove around
            town in a adjective________ wagon.
          </p>
          <p className="summary-answer">
            The Dragon was lonely, and said, this is baloney, if I could find a
            friend, if only.
          </p>
          <p className="summary-answer">
            So the dragon set out to find a companion. A pet, he squealed, I’ll
            name it Brandon.{' '}
          </p>
          <p className="summary-answer">
            But the Dragon did not know what makes a good pet, he settled for a
            animal________, that’s what I’ll get.{' '}
          </p>
          <p className="summary-answer">
            To the dragon’s dismay, this insert above animal only ate hay.{' '}
          </p>
          <p className="summary-answer">
            Exclamation______! the dragon raged, my plan has failed. I can’t
            have hay in the house. If I sneeze it’ll burn down, no doubts!{' '}
          </p>
          <p className="summary-answer">
            So the dragon now had a puzzling/obscure/funny dilemma. I’ll have to
            build the insert animal its own house, he sighed, when a{' '}
          </p>
          <p className="summary-answer">
            Mythical creature_______, walked by and said. I’m looking for a
            house. Pick me instead.{' '}
          </p>
          <p className="summary-answer">
            I don’t want hay and I’m pretty tidy, and I’ll make name a
            foodstuffs__________ every Friday.
          </p>
          <p className="summary-answer">
            That day it was decided, the insert above mythical creature moved
            in, the Dragon was so excited.
          </p>
          <p className="summary-answer">
            For now he had a friend, and on the weekend,
          </p>
          <p className="summary-answer">
            they would toast marshmallows/apples/bubble-gum pie (yum) on the
            fire that the Dragons sneezes provided.{' '}
          </p>
          <p className="summary-answer">The End.</p>
        </div>
        <button className="restart-btn" type="button" onClick={refreshPage}>
          Again
        </button>
      </section>
      <div>
        {/* <footer className="footer-container">
          <h4 className="creator">Created & developed by</h4>
          <p className="creator">~ Saralie Bognandi ~</p>
          <h4 className="creator">Written by</h4>
          <p className="creator">~ Linda Edorsson ~</p>
        </footer> */}
      </div>
    </>
  );
};

export default Summary;
