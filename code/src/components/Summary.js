import React from 'react';

const Summary = (props) => {
    
    return (    
        <div className="summary container">
            <h2>These are your answers:</h2>
            <p>Your name: <span className="userAnswer"></span></p>
        </div>
    );
  };
  
  export default Summary;