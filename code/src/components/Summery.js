import React from 'react'

const Summery = ({nameInput, guestInput, selectOption, radioInput, select2Option}) => {
    return (
    <section id="summery" className="section">
      <div className="intro-text">
        <label>LOVE IS ALL YOU NEED</label>
        <h2>Nice to know you  better. Thank you for sharing!</h2>
        <p>It´s all about love. Love is all around. And so on...</p>
      </div>
      <div className="summery-list">
        <div className="summery-list-item">
          <h4>Your name is </h4>
          <p className="summery-value">{nameInput}</p>
        </div>
        <div className="summery-list-item">
          <h4>Have a nice dinner with </h4>
          <p className="summery-value">{guestInput}</p>
        </div>
        <div className="summery-list-item">
          <h4>Your perfect day! </h4>
          <p className="summery-value">{selectOption}</p>
        </div>
        <div className="summery-list-item">
          <h4>What you are greatful for </h4>
          <p className="summery-value">{radioInput}</p>
        </div>
        <div className="summery-list-item">
          <h4>Good morning, this is your new skill! </h4>
          <p className="summery-value">{select2Option}</p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => window.location.reload(false)} className="btn">Let's talk some more <span role="img" aria-label="handpointer">🤩</span></button>
      </div>
    </section>
    )

}

export default Summery
