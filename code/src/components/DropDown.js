import React, { useState } from 'react'



export const DropDown = () => {
  const [type, setType] = useState("")


  return (

    <div className="question-3-container">
      <form>
        <label>
          <h2>What type of soap do your prefer?</h2>
          <select
            onChange={event => setType(event.target.value)}
            value={type}
          >
            <option value="">Select type</option>
            <option value="Solid">Solid</option>
            <option value="Liquid">Liquid</option>
            <option value="Foam">Foam</option>

          </select>
        </label>
      </form>
    </div>
  )
}