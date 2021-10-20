import React from 'react'

const Overview = (props) => {
  const {nameInput, surnameInput} = props
  return (

      <div> 
        <section>
          <h2>My values: </h2>
          <p>Name {nameInput}</p>
          <p>Surname {surnameInput}</p>
        </section>
      </div>
    
  )
}

export default Overview