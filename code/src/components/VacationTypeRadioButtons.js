import React from 'react';
import StartNextButton from './StartNextButton'
import './VacationTypeRadioButtons.css'

const VacationTypeRadioButton = ({setSection, vacationTypes, vacationType, name, setVacationType, question, progress, setProgress}) => {
  
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
                // checked={answer === {buttonValue}}
              />
              {type}
            </label>
        )
      })
      }
      </div>
      <StartNextButton
        question={question}
        setSection={setSection}
        button="Next"
        progress={progress}
        setProgress= {setProgress}
        state={vacationType}
       />
    </div>
  )
}

export default VacationTypeRadioButton
