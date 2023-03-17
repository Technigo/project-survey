import React from 'react';

export const NextButton = (props) => {
  return (
    <div>
      <button className="next-button" type="button" onClick={() => props.onNext()}>{props.buttonLabel}</button>
    </div>
  );
}
