import React from 'react'

export const DropDown = (props) => {
  const { age, setAge } = props

  return (
    <div className="question">
      What is your age?
      <select
        onChange={(event) => setAge(event.target.value)} value={age}>
        <option value="" className="answerOption">Select age:</option>
        <option value="under 18" className="answerOption">18 and under</option>
        <option value="19-25" className="answerOption">19-25</option>
        <option value="26-35" className="answerOption">26-35</option>
        <option value="36-45" className="answerOption">36-45</option>
        <option value="46-55" className="answerOption">46-55</option>
        <option value="56-65" className="answerOption">56-65</option>
        <option value="66+" className="answerOption">66+</option>
      </select>
    </div>
  )
}