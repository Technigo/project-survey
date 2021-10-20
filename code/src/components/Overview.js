import React from 'react'

const Overview = (props) => {
  const {nameInput, surnameInput, feeling, flavour} = props
  return (

      <div> 
        <section>
          <h2>My values: </h2>
          <p>Name {nameInput}</p>
          <p>Surname {surnameInput}</p>
          <p>You are feeling {feeling === 'happy' ? 'super happy' : 'a bit sad'} </p>
          <p>You want {flavour} popcorn</p>
        </section>
      </div>
    
  )
}

export default Overview