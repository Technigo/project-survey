import React from 'react'

import './Checkboxes.css'

const Checkboxes = ({checkboxGroup, setCheckboxGroup}) => {
  
  const onCheckboxToggle = (checkboxValue) => {
    if (checkboxGroup.includes(checkboxValue)){
      setCheckboxGroup(checkboxGroup.filter(box => box !== checkboxValue))
    } else {
      setCheckboxGroup([checkboxValue, ...checkboxGroup])
    }
  }
  
  return(
    <div className="checkboxes-container">
      <div className="checkbox-label-container">
        <input 
          id="terms" 
          type="checkbox"
          checked={checkboxGroup.includes("agreeTerms")}
          onChange={() => onCheckboxToggle("agreeTerms")}
        />
        <label htmlFor="terms" className="checkbox-label">I agree with Terms and Conditions</label>
      </div>
      
      <div className="checkbox-label-container">
        <input 
          id="newsletter" 
          type="checkbox"
          checked={checkboxGroup.includes("agreeNewsletter")}
          onChange={() =>onCheckboxToggle("agreeNewsletter")}
        />
        <label htmlFor="newsletter" className="checkbox-label">I would like to receive the newsletter</label>
      </div>
    </div>
  )
}

export default Checkboxes
