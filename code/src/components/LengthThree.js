import React from 'react';
// Radio buttons, I use array and .map insted of writing code for every button
const kmGroups = ['0-5km', '5-10km', '10+km']

export const LengthThree = ({ length, setLength }) => {
  const handleLengthChange = (event) => {
    setLength(event.target.value);
  }
  return (
    <form>
      <h2>How far is it from your home to school/work?</h2>
      {kmGroups.map((group) => (
        <div className="inputClass">
          <label htmlFor="howLong" key={group}> {group}
          </label>
          <input
            id="howLong"
            type="radio"
            onChange={handleLengthChange}
            Value={group}
            checked={length === group} />
        </div>
      ))}
    </form>
  )
}