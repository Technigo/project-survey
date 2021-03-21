import React from 'react';

export const Summary = ({name, energy, mood, composer, checkBoxGroup, checkBoxes}) => {
  return (
    <div className='summary-container'>
      <h2>Thank you for answering, {name}!</h2>
      <div className="summary-wrapper">
        <p>Energy level: {energy}</p>
        <p>Mood: {mood}</p>
        <p>When or for what purpose do you enjoy listening classical music?</p>
        <ul>{checkBoxGroup.map((item) => {
          return (
            <li key={item}>{checkBoxes.find(x => x.name === item).text}</li>
          )})}
        </ul>
        <p>Selected composer: {composer}</p>
        <p>Based on your answer, we suggest you the following piece:</p>    
      </div> 
    </div>
  )
}