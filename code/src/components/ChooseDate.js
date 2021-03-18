import React from 'react';
import StartNextButton from './StartNextButton';

const ChooseDate = ({date, setDate, setSection, progress, setProgress, question}) => {
  const onDateChange = (event) => {
    setDate(event.target.value)
  }
  
  return(
    <div className="date-card">
      <h3>When would you want to start your vacation?</h3>
      <label>
        <input type="date" value={date} onChange={onDateChange}/>
      </label>
      <p>Here is the date you picked= {date}</p>
      <StartNextButton
        question={question}
        setSection={setSection}
        button="Next"
        progress={progress}
        setProgress= {setProgress}
      />
    </div>
  )
}

export default ChooseDate