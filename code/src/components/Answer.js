import React, { useState } from 'react'

const Answer = ({ questionId, optionType, options, onPressSubmit }) => {

  //state to catch each answer
  const [answerValues, setAnswerValues] = useState()

  const onSelectAnswer = (e) => {
    setAnswerValues(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    onPressSubmit(questionId, answerValues)
  }

  if (optionType === "radio") {
    return (
      <form className="options">
        {
          options.map((optionName, index) => (
            <div key={`${questionId}-${index}`}>
              <input onChange={onSelectAnswer} type="radio" id={optionName} name={optionType} value={optionName}></input>
              <label htmlFor={optionName}>{optionName}</label>
            </div>
          ))
        }
        <button onClick={onSubmit}>Submit</button>
      </form>
    )
  }
  return (
    <form className="options">
      <select onChange={onSelectAnswer} >
        <option>Select One</option>

        {
          options.map((optionName, index) => (
            <option key={`${questionId}-${index}`} value={optionName}>{optionName}</option>
          ))
        }
      </select>
      <button onClick={onSubmit}>Submit</button>
    </form>

  )

}
export default Answer;