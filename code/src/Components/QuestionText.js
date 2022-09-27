import React from 'react';

const QuestionText = (props) => {
  const { recommendation, setRecommendation } = props

  return (
    <section className="rec-container">
      <p className="rec-question">Do you have a book to recommend?</p>
      <label>
        <input
          className="text-input"
          type="text"
          placeholder="I want to recomend..."
          value={recommendation}
          onChange={(event) => setRecommendation(event.target.value)} />
      </label>
    </section>
  )
}

export default QuestionText