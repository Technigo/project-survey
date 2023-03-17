import React from 'react';
import './ButtonSubmit.css';

export const ButtonSubmit = ({ onSubmit }) => {
  return (
    <button
      type="submit"
      onClick={onSubmit}
      aria-label="Submit answers">
    Submit
    </button>
  );
};
