import React from 'react';

const museumVisits = [
  "1-2",
  "3-5",
  "6-10",
  "10+",
  "I never visit museums",
]

const FrequencyQuestion = ({frequency, setFrequency}) => {

  const handleMuseumVisitChange = (event) => {
    setFrequency(event.target.value)
  }

    return (
      <div>
       <form>
        How many times per year do you visit a museum in Stockholm?
        {museumVisits.map((visits => {
          <label key ={visits}>
            <input
              type="radio"
              value={visits}
              onChange={event => handleAgeChange}
              checked={museumVisits === visits}
              />
              {visits}
            </label>
        }))}
      </form>
      </div>
    );
  }

  export default FrequencyQuestion