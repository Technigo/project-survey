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
          value="">
          Select age:
        </option>
        <option 
          value="under 18" 
          htmlFor="18 and under">
            18 and under
        </option>
        <option 
          value="19-25" 
          htmlFor="19-25">
            19-25
        </option>
        <option 
          value="26-35" 
          htmlFor="26-35">
            26-35
        </option>
        <option 
          value="36-45"  
          htmlFor="36-45">
            36-45
        </option>
        <option 
          value="46-55" 
          htmlFor="46-55">
            46-55
        </option>
        <option 
          value="56-65" 
          htmlFor="56-65">
            56-65
        </option>
        <option 
          value="66+" 
          htmlFor="66+">
            66+
        </option>
      </select>
    </div>
  )
}