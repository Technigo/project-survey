import React from 'react'

function refreshPage() {
  window.location.reload(false);
}

const Summary = (props) => {
  const { radio } = props
  const { genre } = props
  const { number } = props
  const { text } = props

  return (
    <section className="form-summary">
      <p className="summary-thank">Thank you for answering my questions!</p>
      <p className="summary-survey">You {radio} to about {number} books per year, prefer {genre} and recommend {text}. That sounds great!</p>
      <div className="button-container">
        <button className="refresh-button" type="button" onClick={refreshPage}>Refresh</button>
      </div>
    </section>
  )
}

export default Summary;

