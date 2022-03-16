import React from "react"

const QuestionSelectMenuPhone = (props) => {
  const { phone, onPhoneChange, onStepChange } = props

  return (
    <>
      <label htmlFor="phone"><h1>Let’s face it, your mobile phone is within your reach if you stretch your arm, if it’s not already in your hand. So the last question: what’s its brand?</h1></label>
        <select onChange={onPhoneChange} id="phone" value={phone}>
          <option value="" disabled>--Please select an option--</option>
          <option value="iPhone">iPhone</option>
          <option value="Samsung">Samsung</option>
          <option value="Huawei">Huawei</option>
          <option value="other">other</option>
        </select>
        {/* <button onClick={() => onStepChange(1)}>Next</button> */}
        <button onClick={() => onStepChange(-1)}>Back</button>
    </>
  )
}

export default QuestionSelectMenuPhone
