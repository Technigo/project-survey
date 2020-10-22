import React from 'react';
import 'components-css/finaltext.css';

const restart = () => {
  document.location.href = '';
};

export const FinalText = (props) => {
  return (
    <section className="final-text">
      <div className="final-result-container" id="final-text">
        <img className="final-img" src="assets/final-img.png" alt="Group of friends camping" />
        <p className="dream-text" tabIndex="0">On your dream vacation </p>
        <p className="result-text" tabIndex="0">
          ...you&apos;ll find yourself chillin&apos; at
          the {props.resultDestination} with {props.resultNumber} of
          your best friends, drinking cocktails during the {props.resultDay}.
        </p>
        <button className="restart-button" onClick={restart} type="button">Start again!</button>
      </div>
    </section>
  )
};