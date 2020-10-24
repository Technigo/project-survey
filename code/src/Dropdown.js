import React from 'react'

export const Dropdown = ( {handleDropInput} ) => {
    return <div className="question">
      <label for="Movie">Rate Top Gun</label>
        <select name="Movie" id="Movie" onChange={e => handleDropInput(e.target.value)} >
          <option value="Select">Select a rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      
    </div>
}