import React from 'react';

const holidayList = [
  'at the water',
  'on dry land'
]

export const Holiday = ({ holiday, setHoliday }) => {
  return (
    <>
      <p>If I had my <a href="https://www.merriam-webster.com/dictionary/druthers" target="_blank" rel="noopener noreferrer">druthers</a> you would always find me: </p>
      {holidayList.map((locations) => (
        <label htmlFor="holiday-question" key={locations}>
          <input
            id="holiday-question"
            type="radio"
            value={locations}
            onChange={(event) => setHoliday(event.target.value)}
            checked={holiday === locations}
            aria-label={locations} />
          {locations}
        </label>
      ))}
    </>
  )
}

const waterList = [
  'the ocean',
  'the lake'
]

export const Water = ({ water, setWater, setLand }) => {
  const handleWaterChoice = (event) => {
    setWater(event.target.value);
    setLand('');
  }
  return (
    <div className="sub-question-wrapper">
      <p>And, I would prefer to be at:</p>
      {waterList.map((waterSpots) => (
        <label htmlFor="water-question" key={waterSpots}>
          <input
            id="water-question"
            type="radio"
            value={waterSpots}
            onChange={handleWaterChoice}
            checked={water === waterSpots}
            aria-label={waterSpots} />
          {waterSpots}
        </label>
      ))}
    </div>
  )
}

const landList = [
  'the mountains',
  'the woods'
]

export const Land = ({ land, setLand, setWater }) => {
  const handleLandChoice = (event) => {
    setLand(event.target.value);
    setWater('');
  }
  return (
    <div className="sub-question-wrapper">
      <p>And, I would prefer to be at:</p>
      {landList.map((landSpots) => (
        <label htmlFor="land-question" key={landSpots}>
          <input
            id="land-question"
            type="radio"
            value={landSpots}
            onChange={handleLandChoice}
            checked={land === landSpots}
            aria-label={landSpots} />
          {landSpots}
        </label>
      ))}
    </div>
  )
}
