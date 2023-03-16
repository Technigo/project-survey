import React from 'react';

export const HotSauce = ({ hotsauce, setHotSauce }) => {
  const handleHotSauceSelection = (event) => {
    setHotSauce(event.target.value)
  }
  return (
    <>
      Food is just a vehicle for hot sauce!
      <select value={hotsauce} onChange={handleHotSauceSelection}>
        <option disabled value="">Agree or Disagree?</option>
        <option value="definitely">definitely!!</option>
        <option value="not really">erm, not really</option>
      </select>
    </>
  )
}