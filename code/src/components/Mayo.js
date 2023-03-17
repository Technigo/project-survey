import React from 'react';

export const Mayo = ({ mayo, setMayo }) => {
  const handleMayoSelection = (event) => {
    setMayo(event.target.value)
  }
  return (
    <>
      <p>Anything is a salad if you put mayo on it!</p>
      <select value={mayo} onChange={handleMayoSelection}>
        <option disabled value="">Agree or Disagree?</option>
        <option value="definitely">definitely!!</option>
        <option value="not really">erm, not really</option>
      </select>
    </>
  )
}