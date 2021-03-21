import React from 'react';

const Summary = ({ achieved, today, blockers, help }) => {

    const restart = () => {
        document.location.href = '';
      };

  return (
    <div className="summary-section">
     <h2> Summary of your stand-up: </h2>
     <div> 
        <p>{achieved}</p> 
        <p>{today}</p> 
        <p>{blockers}</p> 
        <p>{help}</p> 
    </div>

    <button className="restart-button" onClick={restart} type="button">Restart</button>

    </div>

  );
};

export default Summary;