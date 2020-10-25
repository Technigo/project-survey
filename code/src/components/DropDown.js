import React from 'react'

export const DropDown = (props) => {
  const { age, setAge } = props

  return (
    <div className="question" tabIndex="0">
      What is your age?
      <select
        onChange={event => setAge(event.target.value)} 
        value={age}>
        <option 
          value="" 
          className="answerOption">
          Select age:
        </option>
        <option 
          value="under 18" 
          className="answerOption" 
          htmlFor="18 and under">
            18 and under
        </option>
        <option 
          value="19-25" 
          className="answerOption" 
          htmlFor="19-25">
            19-25
        </option>
        <option 
          value="26-35" 
          className="answerOption" 
          htmlFor="26-35">
            26-35
        </option>
        <option 
          value="36-45"  
          className="answerOption" 
          htmlFor="36-45">
            36-45
        </option>
        <option 
          value="46-55" 
          className="answerOption" 
          htmlFor="46-55">
            46-55
        </option>
        <option 
          value="56-65" 
          className="answerOption" 
          htmlFor="56-65">
            56-65
        </option>
        <option 
          value="66+" 
          className="answerOption" 
          htmlFor="66+">
            66+
        </option>
      </select>
    </div>
  )
}