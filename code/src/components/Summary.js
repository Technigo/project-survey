import React from 'react';

const Summary = ({ inputvalue, radioValue, dropdownValue }) => {
    
    return (    
        <div className="summary container">
            <h2>These are your answers:</h2>
            <p>Your name: <span className="user-answer">{inputvalue}</span></p>
            <p>Your age group: <span className="user-answer">{ radioValue }</span></p>
            <p>Where did you first here about this product? <span className="user-answer">{dropdownValue}</span></p>
        </div>
    );
  };
  
  export default Summary;