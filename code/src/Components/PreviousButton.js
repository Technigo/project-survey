import React from 'react';

export const PreviousButton = (props) => {
  return (
    <div className="previous-button">
      <button type="button" onClick={() => props.onPrevious()}>{props.previousButtonLabel}</button>
    </div>
  );
}
