import React from 'react';

const Summary = ({ header, text, select, radiobutton, checkbox }) => {
  return (
    <>
      <h2>{header}</h2>
      <p>
        Your text is: <b>{text}</b>
      </p>
      <p>
        Your select is <b>{select}</b>
      </p>
      {checkbox.length === 1 ? (
        <p>
          Your checkbox is: <b>{checkbox}</b>
        </p>
      ) : (
        <p>
          Your checkboxes are: <b>{checkbox.sort().join(', \u00A0')}</b>
        </p>
      )}
      <p>
        Your radiobutton is: <b>{radiobutton}</b>
      </p>
    </>
  );
};

export default Summary;
