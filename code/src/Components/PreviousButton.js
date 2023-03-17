import React from 'react';

export const PreviousButton = (props) => {
  return (
    <div>
      <button className="previous-button" type="button" onClick={() => props.onPrevious()}>{props.previousButtonLabel}</button>
    </div>
  );
}
