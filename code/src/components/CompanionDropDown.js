import React from 'react'

const CompanionDropDown = ( { question, dropDownvalue, onCompanionChangeFunction }) => {
    
    return (

        <div>
          <label htmlFor="companion" className="question">{question}</label>
          <select
            className="dropdown-select" 
            id="companion" 
            onChange={onCompanionChangeFunction} 
            value={dropDownvalue} 
            required
          >
            <option disabled value="">Choose option</option>
            <option value="partner">partner</option>
            <option value="best friend">best friend</option>
            <option value="mom">mom</option>
            <option value="child">child</option>
            <option value="dog">dog</option>
          </select>
        </div>
    )
}

export default CompanionDropDown
