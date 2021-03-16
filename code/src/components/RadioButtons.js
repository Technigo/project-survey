import React from 'react';

const RadioButton = (props) => {
  const {answer, setAnswer} = props
  //const [answer, setAnswer] = useState()
  const onAnswerChange = (event) => {
    setAnswer(event.target.value)
  }
  return (
    <div className="label-container">
      {props.buttonsValues.map(buttonValue => {
        return (
          <label className="radio-lable" key={buttonValue}>
            <input
              id={buttonValue}
              type="radio"
              name="question"
              value={buttonValue}
              onChange={onAnswerChange}
              // checked={answer === {buttonValue}}
            />
            {buttonValue}
          </label>
        )
      })
      }
      <p className="result">Here is our value ={answer}</p>
    </div>
  )
}

export default RadioButton
