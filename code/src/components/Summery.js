import React from 'react'

const Summery = ({nameInput, surnameInput, selectOption, radioInput}) => {
    return (
    <section className="section">
      <div className="intro-text">
        <h2>Now I know all about you!</h2>
        <p>Thank you for sharing.</p>
      </div>
      <div className="summery-list">
        <div className="summery-list-item">
          <h4>Your name is </h4>
          <p className="summery-value">{nameInput}</p>
        </div>
        <div className="summery-list-item">
          <h4>Have a nice dinner with </h4>
          <p className="summery-value">{surnameInput}</p>
        </div>
        <div className="summery-list-item">
          <h4>Your perfect day! </h4>
          <p className="summery-value">{selectOption}</p>
        </div>
        <div className="summery-list-item">
          <h4>What you are greatful for </h4>
          <p className="summery-value">{radioInput}</p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => window.location.reload(false)} className="btn">Let' start over! <span role="img" aria-label="handpointer">👋🏼</span></button>
      </div>
    </section>
    )

}

export default Summery
