import React from 'react'

const Summery = ({ nameInput, item, choice }) => {
  return (
    <>
      <section className="summary-section">
        <h2>So here are what you are in the mood for! </h2>

        <p className="summary-text">
          Heeey {nameInput}, so u wanna go {item} and be gona for {choice}
        </p>
      </section>
    </>
  )
}

export default Summery
