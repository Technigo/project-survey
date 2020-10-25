import React from 'react'


const Summary = ({heading, name, color, ageGroup, userHobbies}) => {

  return (
    <> 
      <h2>{heading}</h2>
      <div className="summary-text">
        <p>Hi {name}! Thanks for answering the survey!</p>
        <p>Your favorite color is {color}. I agree, that really is a beautiful color!</p>
        <p>Your age is somewhere around {ageGroup} years. Great age!</p>
        <p>In your sparetime you like to do {userHobbies.join(' & ')}. Sounds like fun!</p>
      </div>
    </>
  )
}
export default Summary

//How would I put a comma between hobbies except for the last hobbie where I want an '&'?
//Something similar to what we did in the music-releases-project, but how exactly?