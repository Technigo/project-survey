import React from 'react'

export const Summary = ({name, ageGroupSpan, planet, item}) => {

  
  return (
    <section className='summary'>
      <p>So your name is {name} and you are between {ageGroupSpan} years old.</p>
      <p>The planet you picked is {planet} and you whant to bring with you: {item}</p>
      <h2>Good luck with that!</h2>
    </section>
    
  )
}


