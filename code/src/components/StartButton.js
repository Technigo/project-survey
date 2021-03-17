import React from 'react';

const StartButton = ({section, question, setSection}) =>{
  return (
    <button 
    type="button"
    value={question}
    onClick={(event)=>setSection(event.target.value)}>
      Start
    </button>
  )
}

export default StartButton

//type="button" value="secondQuestion" onClick={(event)=>setSection(event.target.value)