import React from "react"

const phoneItems = ["iPhone", "Samsung", "Huawei", "other"]

const QuestionSelectMenuPhone = (props) => {
  const { phone, onPhoneChange } = props

  return (
    <>
      <label htmlFor="phone"><h1>Let’s face it, your mobile phone is within your reach if you stretch your arm, if it’s not already in your hand. So the last question: what’s its brand?</h1></label>
        <select onChange={onPhoneChange} id="phone" value={phone}>
          <option value="" disabled>--Please select an option--</option>
          {phoneItems.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
    </>
  )
}

export default QuestionSelectMenuPhone
