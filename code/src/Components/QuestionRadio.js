/* eslint-disable */
import React from 'react';

const QuestionRadio = (props) => {
  const { radio, setRadio } = props

  return (
    <form className="radio-container">
      <h2 className="radio-intro">Nowadays you can both read and listen to a book - how do you do it?</h2>
      <p className="radio-question">Do you like to read or listen to a book?</p>
        <section className="radioBtn">
        <label>
            <p className="radio-read">Read</p>
            <input
            className="radio-input-read"
            type="radio"
            name="readOrListen"
            value="read"
            checked={radio === 'read'}
            onChange={(event) => setRadio(event.target.value)} />
        </label>
        <label>
            <p className="radio-listen">Listen</p>
            <input
            className="radio-input-listen"
            type="radio"
            name="readOrListen"
            value="listen"
            checked={radio === 'listen'}
            onChange={(event) => setRadio(event.target.value)} />
        </label>
      </section>
    </form>
  )
}

export default QuestionRadio;