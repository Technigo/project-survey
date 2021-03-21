import React from 'react';

export const MoodOption = ( {setMood, moods} ) => {
  const onMoodChange = (e) => {
    setMood(e.target.value)
  }

  return (
    <div className='question-wrapper'>
      <h3>What is your mood at the moment?</h3>
      {moods.map((mood) => {
        return (
          <div key={mood}>
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
      })}           
    </div>


    


  )
}