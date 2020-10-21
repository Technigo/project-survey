import React from 'react'


const Summary = ({name, color}) => {

  return (
    <section className="summmary-wrapper">
      <h2>
        Survey summary
      </h2>
      <p>Hi {name}!</p>
      <p>Your favorite color is {color}. I agree, that really is a beautiful color!</p>
      <p>Your age is somewhere around {'AGE-SPAN SHOULD GO HERE?'}</p>
      <p>In your sparetime you like to do {'HOBBIES GOES HERE'}</p>
    </section>
  )
}
export default Summary