import React from 'react';

export const Seasons = ({ selectedOption, setSelectedOption }) => {
  const handleSeasonsChange = (event) => {
    setSelectedOption(selectedOption);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <><p>What is your favorite season?</p>
      <form onSubmit={handleSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Winter"
              checked={selectedOption === 'Winter'}
              onChange={handleSeasonsChange} />
          Winter
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Autum"
              checked={selectedOption === 'Autum'}
              onChange={handleSeasonsChange} />
          Autum
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Spring"
              checked={selectedOption === 'Spring'}
              onChange={handleSeasonsChange} />
          Spring
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Summer"
              checked={selectedOption === 'Summer'}
              onChange={handleSeasonsChange} />
          Summer
          </label>
        </div>
        <div>
        Selected option is : {selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
        Submit
        </button>
      </form>
    </>
  );
}