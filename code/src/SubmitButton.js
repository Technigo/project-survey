import React from 'react';

export const SubmitButton = ({ type, text }) => {
  return (
    <div className="form-group form-group-submit">
      <button className="submit-button" type={type}>
        {text}
      </button>
    </div>
  );
};
