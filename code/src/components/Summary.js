import React from 'react';

const Summary = ({ inputvalue, radioValue, dropdownValue }) => {
    
    return (    
        <div className="summary container">
            <h2>These are your answers:</h2>
            <p className="summary-question">Your name: <span className="user-answer">{ inputvalue }</span></p>
            <p className="summary-question">Your age group: <span className="user-answer">{ radioValue }</span></p>
            <p className="summary-question">Where did you first here about this product? <span className="user-answer">{ dropdownValue }</span></p>
        </div>
    );
  };
  
  export default Summary;