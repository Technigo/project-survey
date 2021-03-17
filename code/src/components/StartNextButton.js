import React from 'react';

const StartNextButton = ({question, setSection, button, progress, setProgress}) =>{
  const onSectionChange = (event)=> {
    // console.log(progress)
    setSection(event.target.value)
    // setProgress(progress++)
    // console.log(progress)
  }
  return (
    <button 
    type="button"
    value={question}
    onClick={onSectionChange}>
      {button}
    </button>
  )
}

export default StartNextButton

//type="button" value="secondQuestion" onClick={(event)=>setSection(event.target.value)