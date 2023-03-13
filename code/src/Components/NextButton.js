import React from 'react';

export const NextButton = (props) => {
  return (
    <div>
      <button type="button" onClick={() => props.onNext()}>Next</button>
    </div>
  );
}
