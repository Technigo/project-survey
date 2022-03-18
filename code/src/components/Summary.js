import React from 'react'

const Summary = ({nameInput, musicInput, selectOptionInput, radioInput}) => {
  return (
    <>  
      <section className="head-section-summary" id="summary">
        <div className="summary-header">
          <h2 className="summary-header-text">{nameInput},</h2>
          <h2 className="summary-thin-intro-text">here is your Monday Mantra!</h2>
        </div>
        <div className="summary-container">
            <h3 className="summary-mantra-text">I highly recommend you to: As far as you wake up, put on<span className="mantra-word-emph">{musicInput}!</span> Continue eating a lot of<span className="mantra-word-emph">{selectOptionInput}</span>  
            & drink as much<span className="mantra-word-emph">{radioInput}</span> as you want. And last but absolutely not least be very very soft to
            yourself. It's a transition day - alright? </h3>
        </div>
        <button type="submit" onClick={() => window.location.reload()} className="btn restart-btn"> I need a new mantra!
        </button>
      </section>
    </>
  )
}

export default Summary