import React from 'react' 

const restart = () => {
  document.location.href = '';
}

const Summary = (props) => {

  return (
    <section className="question-container summary">
      <h1>Amazing {props.name}!</h1>
      <p>
        You read {props.time} during {props.favoriteTime} time. 
        I love that your favorite place to read is {props.place}.
      </p>
      <button 
      onClick={restart} 
      className="start-btn"
      type="button"
      tabIndex='0'
      aria-label='Restart the survey'
      >
        Restart
      </button>
      <img className="summary-image" src="assets/woman2.png" alt="header"/>
    </section>
  )
}

export default Summary

