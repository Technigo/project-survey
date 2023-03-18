import React from 'react';

export const NextButton = (props) => {
  return (
    <div>
      <button className="next-button" type="submit" onClick={() => props.onNext()}>{props.buttonLabel}</button>
    </div>
  );
}
