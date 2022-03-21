import React from 'react'

const Summery = ({ nameInput, destination, options }) => {
  return (
    <>
      <section className="summery-section">
        <h2>So that´s your plan! </h2>

        <p className="summery-text">
          So {nameInput}, so u wanna go {destination} and be gona for {''}
          {options}. Hope u have packt all nu need for this trip and hope u have
          a good time :)
        </p>
      </section>
    </>
  )
}

export default Summery
