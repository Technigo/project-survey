import React from 'react'

export const Dropdown = ( {handleDropInput} ) => {
    return <div className="question">
      <label for="Movie" tabIndex="0">Rate Top Gun</label>
        <select name="Movie" id="Movie" onChange={e => handleDropInput(e.target.value)} tabIndex="0" required>
          <option value="Select" tabIndex="0">Select a rating</option>
          <option value="10">10</option>
        </select>
      
    </div>
}