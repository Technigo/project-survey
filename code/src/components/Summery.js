import React from 'react'

const Summery = ({ nameInput, destination, timeAway }) => {
  return (
    <>
      <section className="summary-section">
        <h2>So here are what you are in the mood for! </h2>

        <h3 className="summary-text">
          Heeey {nameInput}, so u wanna go {destination} and be gona for
          {timeAway}. Hope u have packt all nu need for this trip and hope u
          have a good time :)
        </h3>
      </section>
    </>
  )
}

export default Summery
