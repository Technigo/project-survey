import React from 'react';
import ButtonNext from './ButtonNext';

const Summary = ({ name, monthType, place, range, onClickNext }) => {
  return (
    <section className="content-container">
      <div className="summary-container">
        <p className="header-paragraph">
            Thank you {name}!
            You will travel in <span className="color2">{monthType}</span>, you will experience <span className="color3">{place}</span> and you will meet {range} aliens 👽.
        </p>
      </div>
      <div className="button-container">
        <ButtonNext button="Start again" onClickNext={onClickNext} />
      </div>
    </section>

  );
};

export default Summary;