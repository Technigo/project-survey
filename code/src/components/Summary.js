import React from 'react'

const Summary = ({nameInput, musicInput, selectOptionInput, radioInput}) => {
  return (
    <>  
      <section className="head-section" id="summary">
        <div className="summary-header">
          <h2 className="header-text">{nameInput}, here is your Monday Mantra!</h2>
          <p>I highly recommend you to:</p>
        </div>
        <div className="summary-container">
          <div className="summary-list-row">
            <h3>Eat </h3>
            <p className="summary-answer">{selectOptionInput}</p>
          </div>
          <div className="summary-list-row">
            <h3>Drink </h3>
            <p className="summary-answer">{radioInput}</p>
          </div>
          <div className="summary-list-row">
            <h3>Listen to </h3>
            <p className="summary-answer">{musicInput}</p>
          </div>
          <div className="summary-list-row">
            <h3>..and be soft to yourself - It's a transition day, alright?</h3>
          </div>
        </div>
        <button type="submit" onClick={() => window.location.reload()} className="btn restart-btn"> I need a new mantra!
        </button>
      </section>
    </>
  )
}

export default Summary