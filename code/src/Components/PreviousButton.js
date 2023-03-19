import React from 'react';

export const PreviousButton = (props) => {
  return (
    <div>
      <button className="previous-button" type="submit" onClick={() => props.onPrevious()}>{props.previousButtonLabel}</button>
    </div>
  );
}
