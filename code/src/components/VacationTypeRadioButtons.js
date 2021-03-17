import React from 'react';
import StartNextButton from './StartNextButton'

const VacationTypeRadioButton = ({setSection, vacationTypes, vacationType, name, setVacationType, question}) => {
  
  const onVacationTypeChange = (event) => {
    setVacationType(event.target.value)
  }
  return (
    <div>
      <h3>What type of activities you prefer?</h3>
      <div className="label-container">
        {vacationTypes.map(type => {
          return (
            <label className="radio-lable" key={type}>
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
      <p className="result">Here is our value ={vacationType}</p>
      <StartNextButton
        question={question}
        setSection={setSection}
        button="Next"
       />
    </div>
  )
}

export default VacationTypeRadioButton
