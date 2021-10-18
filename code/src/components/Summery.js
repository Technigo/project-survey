import React from 'react'

const Summery = ({nameInput, surnameInput}) => {
    return (
    <section>
      <h2>My values from form:</h2>
      <p>Well hi there: {nameInput}</p>
      <p>Ofcourse you like: {surnameInput}</p>
      <p>Your favourite song: {surnameInput}</p>
    </section>
    )

}


export default Summery

