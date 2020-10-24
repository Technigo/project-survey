import React from 'react'


const Summary = ({heading, name, color, ageGroup, userHobbies}) => {

  return (
    <>
      <h2>{heading}</h2>
      <p>Hi {name}! Thanks for answering the summary!</p>
      <p>Your favorite color is {color}. I agree, that really is a beautiful color!</p>
      <p>Your age is somewhere around {ageGroup} years. Great age!</p>
      <p>In your sparetime you like to do {userHobbies.join(', ')}. Sounds like fun hobbies!</p>
    </>
  )
}
export default Summary