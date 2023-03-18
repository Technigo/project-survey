import React from 'react';
import './ButtonSubmit.css';

export const ButtonSubmit = ({ onSubmit }) => {
  return (
    <button
      type="submit"
      className="button-submit"
      onClick={onSubmit}
      aria-label="Submit answers">
    Submit
    </button>
  );
};
