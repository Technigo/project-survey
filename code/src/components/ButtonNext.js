import React from 'react';

const ButtonNext = ({ button, onClickNext }) => {
  return (
    <div className="button-container">
      <button className="button-start" type="submit" onClick={onClickNext}>{button}
      </button>
    </div>
  );
};

export default ButtonNext;