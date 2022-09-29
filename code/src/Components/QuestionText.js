/* eslint-disable */
import React from 'react';

const QuestionText = (props) => {
  const { recommendation, setRecommendation } = props

  return (
    <section className="rec-container">
      <p className="rec-question">Please recomend a book!</p>
      <form className="text-input-form" onSubmit={event => event.preventDefault()}>
        <input
          className="text-input"
          type="text"
          placeholder="I want to recomend..."
          value={recommendation}
          onChange={(event) => setRecommendation(event.target.value)} />
      </form>
    </section>
  )
}

export default QuestionText