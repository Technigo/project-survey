import React from 'react';

export const Summary = ({ name }) => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <p>Thank you {name} Please confirm your answers</p>
      <p>to start again click below</p>
      <button onClick={refreshPage} type="submit">Reload</button>
      <p>If they are correct click the submit button</p>
    </>
  );
}

