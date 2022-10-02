import React from 'react';

const FrequencyQuestion = ({frequency, setFrequency}) => {

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value)
  }

    return (
    <>
      <h2>How many times per year do you visit a museum in Stockholm?</h2>
        <form>
          <label htmlFor="visits">Number of visits per year:</label>
          <input 
          id="visits"
          className="range-input"
          type="range" 
          name="visits"
          onChange={handleFrequencyChange}
          value={frequency}
          min="0"
          max="20"/>
          <span className="bold-p">{frequency}</span>
        </form>
      </>
    );
  }

  export default FrequencyQuestion