import React from 'react';

const Summary = ({ name, checked, value }) => {

    const restart = () => {
        document.location.href = '';
      };

  return (
    <div className="summary-section">
     <h1> Your Summary: </h1>
     <p> {name} is interested in {value} term investments in {checked} </p>

    <button className="restart-button" onClick={restart} type="button">Restart</button>

    </div>

  );
};

export default Summary;