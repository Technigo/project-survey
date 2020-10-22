import React from 'react';

const DropDown = ({ week, onWeekChange }) => {
  return (
    <div className="dropdown">
      <label htmlFor="week">
        <h2 className="label">1 - What week are you feedbacking?</h2>
      </label>
      <select className="dropdown-options" id="week" value={week} onChange={onWeekChange}>
        <option value="">Type or select an option</option>
        <option value="week1">Week 1</option>
        <option value="week2">Week 2</option>
        <option value="week3">Week 3</option>
        <option value="week4">Week 4</option>
        <option value="week5">Week 5</option>
      </select>
    </div>
  )
}

export default DropDown;