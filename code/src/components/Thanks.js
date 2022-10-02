import React from "react";


export const Thanks = ({name, reset}) => {
  
    return (
      <div className="container">
        <h1>Thanks {name} for taking the time to answer our survey.<br></br><br></br> We will review your feedback shortly and we hope to see you soon again.</h1>
        <div className="buttons">
            <button onClick={reset}>Reset</button>
         </div>
      </div>
      )
    }