import React from 'react';

const kmGroups = ['0-5km', '5-10km', '10+km']

export const LengthThree = ({ length, setLength }) => {
  const handleLengthChange = (event) => {
    setLength(event.target.value);
  }
  return (
    <form>
      <p>How far is it from your home to school/work?</p>
      {kmGroups.map((group) => (
        <>
          <label htmlFor="howLong" key={group}> {group}
          </label>
          <input
            id="howLong"
            type="radio"
            onChange={handleLengthChange}
            Value={group}
            checked={length === group} />
        </>
      ))}
    </form>
  )
}