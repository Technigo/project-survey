import React from 'react'

const Summery = ({nameInput, guestInput, selectOption, radioInput, select2Option}) => {
    return (
    <section id="summery" className="section">
      <div className="intro-text">
        <label>LOVE IS ALL AROUND</label>
        <h2>Nice to know you  better. Thank you for sharing!</h2>
      </div>
      <div className="summery-list">
        <div className="summery-list-item">
          <h4>Hello </h4>
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
      <div class="end-button">
        <button type="submit" onClick={() => window.location.reload(false)} className="startover-btn">Let's talk some more <span role="img" aria-label="handpointer">❤️</span></button>
      </div>
    </section>
    )

}

export default Summery
