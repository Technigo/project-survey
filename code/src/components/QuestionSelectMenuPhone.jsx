import React from "react"

const phoneItems = ["iPhone", "Samsung", "Huawei", "other"]

const QuestionSelectMenuPhone = (props) => {
  const { phone, onPhoneChange } = props

  return (
    <div className="q-and-a-box">
      <label htmlFor="phone"><h1>If your mobile phone isn't already in your hand, it's within your reach: select its brand</h1></label>
        <select className="select-input" onChange={onPhoneChange} id="phone" value={phone}>
          <option value="" disabled>--Please select an option--</option>
          {phoneItems.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
    </div>
  )
}

export default QuestionSelectMenuPhone
