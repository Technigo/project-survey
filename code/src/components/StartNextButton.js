import React from 'react';

const StartNextButton = ({question, setSection, button, progress, setProgress}) =>{
  const onSectionChange = ()=> {
    // console.log(progress)
    setSection(question)
    onProgressChange()
  }
  const onProgressChange = () => {
    setProgress(progress +20)
  }
  return (
    <button 
    type="button"
    onClick={onSectionChange}>
      {button}
    </button>
  )
}

export default StartNextButton

//type="button" value="secondQuestion" onClick={(event)=>setSection(event.target.value)