import React from "react"

const FirstQuestion = ({ triggerGender, stateGender }) => {
  const genderList = [{ text: "Female" }, { text: "Male" }, { text: "Other" }]

  return (
    <form className="form">
      <p>Please select your gender:</p>
      {genderList.map((gender) => (
        <label className="radioContainer">
          <input
            type="radio"
            value={gender.text}
            onChange={(event) => triggerGender(event)}
            checked={stateGender === gender.text}
          />
          {gender.text}
        </label>
      ))}
    </form>
  )
}

export default FirstQuestion

// onChange={(event) => triggerGender(event)}

// or

// const triggerGender = (event) => {
//    setUsername(event.target.value)
//}
//
// onChange={triggerGender}
