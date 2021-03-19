import React from 'react';
import StartNextButton from './StartNextButton';

import './ChooseDate.css'

const ChooseDate = ({date, setDate, setQuestion, progress, setProgress}) => {
  
  const today = new Date().toISOString().slice(0,10)
  const onDateChange = (event) => {
    setDate(event.target.value)
  }
  
  return(
    <div className="date-card">
      <h3 className="question-heading">When would you want to start your vacation?</h3>
      <label className="date-label">
        Choose a date
        <input type="date" min={today} value={date} onChange={onDateChange} className="date" placeholder="yyyy-mm-dd"/>
      </label>
      <StartNextButton
        setQuestion={setQuestion}
        progress={progress}
        setProgress= {setProgress}
        state={date}
      />
    </div>
  )
}

export default ChooseDate