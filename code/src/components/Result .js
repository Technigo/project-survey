import React from 'react';

export const Result = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <p>According to your submition your best fit mentor is: </p>
      <button onClick={refreshPage} type="submit">Reload</button>
    </>
  );
}

