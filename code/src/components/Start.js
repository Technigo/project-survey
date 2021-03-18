import React from 'react'


const Start = ({ onClickStart }) => {
  return (
    <section className="container">
      <div className="main-section">
        <img src="./assets/food-logo.png" alt="cooking time" />
        <div className="text-section">
          <h1 className="title">Tell us more about your preferences</h1>
          <p> We want to help you to get options for preparing today...</p>
        </div>
        <button onClick={() => onClickStart(true)}>Start</button>
      </div>
    </section>
  )

}

export default Start;

