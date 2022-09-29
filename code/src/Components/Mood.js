import React from 'react';

const moodPreferences = ['I do not wanna talk about it', 'Not great, actually', 'It has been worse', 'King of the world!'];

export const Mood = ({ mood, setMood }) => {
  const handleMoodChange = (event) => {
    setMood(event.target.value);
    console.log('value is:', event.target.value);
  }

  return (
    <form>
      <div className="moodComponent">
        <p>What is your mood after today?</p>
        {moodPreferences.map((moodType) => (
          <label key={moodType}>
            <input
              type="radio"
              onChange={handleMoodChange}
              value={moodType}
              checked={mood === moodType} />
            {moodType}
          </label>
        ))}
      </div>
    </form>
  )
}