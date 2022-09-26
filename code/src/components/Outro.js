/* eslint-disable indent */
import React from 'react';

const Outro = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div>
      Här ska vi ha en slutsida med resultat
      <button className="restart-btn" type="button" onClick={refreshPage}>
        Click to reload!
      </button>
    </div>
  );
};

export default Outro;
