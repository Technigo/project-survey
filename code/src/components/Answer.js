import React, { useState } from 'react'

const Answer = ({ questionId, optionType, options, onPressSubmit }) => {

  //state to catch each answer
  const [answerValues, setAnswerValues] = useState()

  const onSelectAnswer = (e) => {
    setAnswerValues(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (answerValues) {
      onPressSubmit(questionId, answerValues)
    } else {
      alert("Please select one option")
    }
  }

  if (optionType === "radio") {
    return (
      <form className="options">
        {
          options.map((optionName, index) => (
            <div key={`${questionId}-${index}`}>
              <label className="radio" htmlFor={optionName}>
                <input onChange={onSelectAnswer} type="radio" id={optionName} name={optionType} value={optionName} required></input>
                {optionName}
              </label>

            </div>
          ))
        }
        <button type="submit" onClick={onSubmit}>Submit</button>
      </form>
    )
  }
  return (
    <form className="options">
      <select className="select" onChange={onSelectAnswer} >
        <option className="select">Select One</option>

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