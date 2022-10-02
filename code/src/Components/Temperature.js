import React from 'react';

  const Temperature= ({temperature, setTemperature, handlePreviousQuestionClick, handleNextQuestionClick, counter }) => {

  return (
  <>
    <div className="questionWrapper">
      <p> What temperature do you prefer on your hollyday?</p>
        <p className='degrees'>{temperature}°</p>
    </div>

    <div className="temperatureWrapper">
      <form>
      <input
        value= {temperature}
        className="slider"
        type="range"
        min="0"
        max="35"
        onChange={event => setTemperature(event.target.value)}
      />
      </form>
    </div>

    <div className='buttonWrapper'>
      <button type="button" onClick={handlePreviousQuestionClick}> ◀︎ Back </button>
      <button type="button" onClick={handleNextQuestionClick}> Next ▶︎</button>
    </div>

    <div className='questionNumber'>
    <p> {counter} /5 </p>
    </div>
  </>   
  );
  }

export default Temperature;