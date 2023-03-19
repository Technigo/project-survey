import React from 'react';
import ButtonNext from './ButtonNext';

const Zipper = ({ range, onRangeChange, onClickNext }) => {
  return (
    <section className="content-container">
      <h1 className="header-copy">
        How many aliens would you like to meet?
      </h1>
      <div className="zipper-container">
        <input type="range" min="1" max="5" value={range} onChange={onRangeChange} />
      </div>
      <div className="button-container">
        <ButtonNext button="Next" onClickNext={onClickNext} />
      </div>
    </section>

  );
};

export default Zipper;