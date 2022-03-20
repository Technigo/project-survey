import React from 'react'

const Submit = (props) => { 
    return (
      <div className="submit-container">
        <button onClick={props.handleSubmit}>I'm done, send in!</button>
      </div>
)}
  
  export default Submit;