import React from 'react';
import StartNextButton from './StartNextButton'
import './VacationTypeRadioButtons.css'

const VacationTypeRadioButton = ({setQuestion, vacationTypes, vacationType, name, setVacationType, progress, setProgress}) => {
  
  const onVacationTypeChange = (event) => {
    setVacationType(event.target.value)
  }
  return (
    <div className="radio-card">
      <h3 className="question-heading">What type of activities you prefer?</h3>
      <div className="label-container">
        {vacationTypes.map(type => {
          return (
            <label className="radio-label" key={type}>
              <input
                id={type}
                type="radio"
                name={name}
                value={type}
                onChange={onVacationTypeChange}
              />
              {type}
            </label>
        )
      })
      }
      </div>
      <StartNextButton
        setQuestion={setQuestion}
        progress={progress}
        setProgress= {setProgress}
        state={vacationType}
       />
    </div>
  )
}

export default VacationTypeRadioButton
