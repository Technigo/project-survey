import React from 'react';

// const climateTypes = ['cold and snowy', 'warm but breezy', 'hot hot hot!'];

export const Climate = ({ climate, setClimate }) => {
  const handleClimateChange = (event) => {
    setClimate(event.target.value);
  }
  return (
    <>
      {/* <div className="radioBtn"> */}
      <p>What kind of climate is most appealing to you?</p>
      {/* {Climate.map((group)) => (
        <label key={group}
      )} */}
      <input type="radio" id="" value={climate} onChange={handleClimateChange} />
      {/* </div> */}
    </>
  );
}
