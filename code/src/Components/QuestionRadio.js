import React from 'react';

const QuestionRadio = (props) => {
  const { radio, setRadio } = props

  return (
    <form className="radio-container">
      <p className="radio-question">Do you like to read or listen to a book?</p>
      <label>
        <input
          className="radio-input"
          type="radio"
          name="readOrListen"
          value="read"
          checked={radio === 'read'}
          onChange={(event) => setRadio(event.target.value)} />
          Read
      </label>
      <label>
        <input
          className="radio-input"
          type="radio"
          name="readOrListen"
          value="listen"
          checked={radio === 'listen'}
          onChange={(event) => setRadio(event.target.value)} />
          Listen
      </label>
    </form>
  )
}

export default QuestionRadio;