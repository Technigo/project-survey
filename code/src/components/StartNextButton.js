import React from 'react';

const StartNextButton = ({question, setSection, button}) =>{
  return (
    <button 
    type="button"
    value={question}
    onClick={(event)=>setSection(event.target.value)}>
      {button}
    </button>
  )
}

export default StartNextButton

//type="button" value="secondQuestion" onClick={(event)=>setSection(event.target.value)