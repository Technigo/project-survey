import React from 'react';

export const MoodOption = ( {mood, setMood}) => {
  const onMoodChange = (e) => {
    setMood(e.target.value)
  }

  return (
    <div>
      <input 
        id={mood}
        type='radio'
        name='mood'
        value={mood}
        onChange={onMoodChange}
        required
      />
      <label htmlFor={mood}>{mood}</label>
    </div>
  )
}