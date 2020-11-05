import React from 'react'

export const Dropdown = ( {onDropInput} ) => {
    return <div className="question">
      <label for="movie" tabIndex="0">Rate Top Gun</label>
        <select name="movie" id="movie" onChange={e => onDropInput(e.target.value)} tabIndex="0" required>
          <option value="Select" tabIndex="0">Select a rating</option>
          <option value="10">10</option>
        </select>
    </div>
}