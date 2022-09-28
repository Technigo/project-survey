/* eslint-disable */
import React from 'react';

const QuestionRadio = (props) => {
  const { radio, setRadio } = props

  return (
    <form className="radio-container">
      <h2 className="radio-intro">In auctor non nibh eu ultricies. Mauris eget ultrices justo, vitae tincidunt nulla. Aenean quis enim at orci blandit viverra.</h2>
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