import React from 'react';

const moodPreferences = ['No comments, I just wanna cry', 'Not great, but still some hope left', 'Quite alright actually', 'Smooth sailing today!', 'I am the king of coding!'];

export const Mood = ({ mood, setMood }) => {
  const handleMoodChange = (event) => {
    setMood(event.target.value);
    console.log('value is:', event.target.value);
  }

  return (
    <form>
      <div className="moodComponent">
        <h2>What are your feelings after today?</h2>
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