import React from 'react'

const Summary = ({nameInput, musicInput, selectOptionInput, radioInput}) => {
  return (
    <>  
      <section className="head-section" id="summary">
        <div className="summary-header">
          <p className="thin-intro-text summary-name">{nameInput}!</p>
          <h2 className="question-text">Here is your Monday Mantra!</h2>
        </div>
        <div className="summary-container">
            <h3 className="summary-mantra-text">I highly recommend you to: As far as you wake up: Put on <span className="mantra-word-emph">{musicInput}!</span> Continue eating a lot of <span className="mantra-word-emph">{selectOptionInput} </span>  
             & drink as much <span className="mantra-word-emph">{radioInput}</span> as you want. And last but absolutely not least be very very soft to
            yourself. It's a transition day - alright? </h3>
        </div>
        <button type="submit" onClick={() => window.location.reload()} className="btn start-btn"> A new mantra!
        </button>
      </section>
    </>
  )
}

export default Summary