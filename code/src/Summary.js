import React from 'react'


const Summary = ({heading, name, color, ageGroup, userHobbies}) => {

  return (
    <> 
      <h2 tabIndex="0">{heading}</h2>
      <div className="summary-text">
        <p tabIndex="0">Hi {name}! Thanks for answering the survey!</p>
        <p tabIndex="0">Your favorite color is {color}. I agree, that really is a beautiful color!</p>
        <p tabIndex="0">Your age is somewhere around {ageGroup} years. Great age!</p>
        <p tabIndex="0">In your sparetime you like to do {userHobbies.join(' & ')}. Sounds like fun!</p>
      </div>
    </>
  )
}
export default Summary

//How would I put a comma between hobbies except for the last hobbie where I want an '&'?
//Something similar to what we did in the music-releases-project, but how exactly?