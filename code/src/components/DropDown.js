import React from 'react'

export const DropDown = (props) => {
  const { age, setAge } = props

  return (
    <div className="question">
      What is your age?
      <select
        onChange={event => setAge(event.target.value)} 
        value={age}
        name="age-dropdown-menu"
      >
        <option value="" className="answerOption" for="menu header with prompt to select age group">Select age:</option>
        <option value="under 18" className="answerOption" for="18 and under">18 and under</option>
        <option value="19-25" className="answerOption" for="19-25">19-25</option>
        <option value="26-35" className="answerOption" for="26-35">26-35</option>
        <option value="36-45" className="answerOption" for="36-45">36-45</option>
        <option value="46-55" className="answerOption" for="46-55">46-55</option>
        <option value="56-65" className="answerOption" for="56-65">56-65</option>
        <option value="66+" className="answerOption" for="66+">66+</option>
      </select>
    </div>
  )
}