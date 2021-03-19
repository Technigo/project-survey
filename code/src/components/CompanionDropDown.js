import React from 'react'

const CompanionDropDown = ( {question, dropDownvalue, onCompanionChange }) => {
    return (
        <div>
            <label htmlFor="companion">
            {question}
            </label>
            <select id="companion" onChange={onCompanionChange} value={dropDownvalue} >
              <option disabled></option>
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
