import React from 'react';

const museumVisits = [
  "1-2",
  "3-5",
  "6-10",
  "10+",
  "I never visit museums",
]

const FrequencyQuestion = ({frequency, setFrequency}) => {

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value)
  }

    return (
      <form>
        <h2>How many times per do you visit a museum in Stockholm?</h2>
        <label for="visits">Number of visits per year:</label>
        <input 
        id="visits"
        className="range-input"
        type="range" 
        name="visits"
        onChange={handleFrequencyChange}
        value={frequency}
        min="0"
        max="50"/>
        {frequency}
      </form>
      
    );
  }

  export default FrequencyQuestion