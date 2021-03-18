import React from 'react';
import './StartNextButton.css'

const StartNextButton = ({question, setSection, button, progress, setProgress, state}) =>{
  
  const isStateUnchanged = () => {
    return state===""
  }
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
    className="start-next-button"
    disabled={isStateUnchanged()}
    type="button"
    onClick={onSectionChange}>
      {button}
    </button>
  )
}

export default StartNextButton

//type="button" value="secondQuestion" onClick={(event)=>setSection(event.target.value)