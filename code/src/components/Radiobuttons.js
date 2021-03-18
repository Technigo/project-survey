import React from 'react'


const Radiobuttons = (props) => {
  

  const onValueChange = (event) => {
    props.setValue(event.target.value)
  }

  return (
    <>
      <h2>{props.questionText}</h2>
      <div className="radio-div">
        {props.valueArray.map(value => (
          <div className="radio-btn">
            <input name={props.questionName} 
              type="radio"
              onChange={onValueChange}
              value={value}
              checked={props.chosenValue === value} />
            <span className="custom-radio"></span>
            <label htmlFor={props.questionName}>{value}</label>
          </div>
        ))}
       </div>
    </>
  )
}
export default Radiobuttons

