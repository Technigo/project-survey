import React from 'react';
import StartNextButton from './StartNextButton'

const NeedVacationRange = ({question, setSection, needVacation, setNeedVacation, progress, setProgress}) => {

  const onNeedVacationChange = (event => {
    setNeedVacation(event.target.value)
  }) 
  return (
    <div className="slider-container">
      <p className="question">From 1-10: how badly do you need vacation?</p>
      <div className="wrapper">
      <label htmlFor="range" className="range-lable">
        <div className="range-item">Can wait and see</div>
        <div className="range-item">Must have vacation</div>
      </label>
      <input
        className= "slider"
        type = "range"
        id = "range"
        min = "1"
        max= "10"
        value ={needVacation}
        onChange={onNeedVacationChange}
        required
        // value = "5"
      />
      </div>
      <p>Here is our satisfaction: {needVacation}</p>
      <StartNextButton 
      question={question} 
      setSection={setSection}
      progress={progress}
      setProgress= {setProgress} 
      button="Next"
      state={needVacation}/>
    </div>
  )
}
export default NeedVacationRange