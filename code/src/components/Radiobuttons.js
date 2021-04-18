import React from 'react'


const Radiobuttons = ({ questionName, questionText, valueArray, chosenValue, handleInputChange }) => {
  

  const onRadioChange = (event) => {
    handleInputChange(event.target.name, event.target.value)
  }

  return (
    <>
      <h2>{questionText}</h2>
      <div className="radio-div">
        {valueArray.map(value => (
          <div key={value} className="radio-btn">
            <input key={value} 
              name={questionName}
              id={value}   
              type="radio"
              onChange={onRadioChange}
              value={value}
              checked={chosenValue === value} 
              />
            <span className="custom-radio"></span>
            <label htmlFor={value}>{value}</label>
          </div>
        ))}
       </div>
    </>
  )
}
export default Radiobuttons

