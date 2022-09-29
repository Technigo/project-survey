import React from 'react'

function refreshPage() {
  window.location.reload(false);
}

const Summary = (props) => {
  const { radio } = props
  const { genre } = props
  const { number } = props
  const { recommendation } = props

  return (
    <section className="form-summary">
      <p className="summary-survey">You {radio} to {number} books per year and prefer {genre}. I will definitely add {recommendation} to my list. Thank you for answering my questions!</p>
      <div className="button-container">
        <button className="refresh-button" type="button" onClick={refreshPage}>Refresh</button>
      </div>
    </section>
  )
}

export default Summary;

