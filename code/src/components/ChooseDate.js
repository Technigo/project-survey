import React from 'react';
import StartNextButton from './StartNextButton';

import './ChooseDate.css'

const ChooseDate = ({date, setDate, setSection, progress, setProgress, question}) => {
  const onDateChange = (event) => {
    setDate(event.target.value)
  }
  
  return(
    <div className="date-card">
      <h3 className="question-heading">When would you want to start your vacation?</h3>
      <label className="date-label">
        Choose a date
        <input type="date" value={date} onChange={onDateChange} className="date"/>
      </label>
      <StartNextButton
        question={question}
        setSection={setSection}
        button="Next"
        progress={progress}
        setProgress= {setProgress}
        state={date}
      />
    </div>
  )
}

export default ChooseDate