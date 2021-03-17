import React from "react";

import NextQuestionButton from './NextQuestionButton'

const QuestionCitySelect = ({
  inhabitants, 
  setInhabitants, 
  page,
  setPage,
  onNextQuestion,
  message
}) => {
  const onInhabitantsChange = (e) => {
    setInhabitants(e.target.value);
  }

  return (
    <article className="form-question">
      {/* Q */}
      <label htmlFor="title" className="form-question" tabIndex="0">
        I live in a city with this many inhabitants
      </label>

      {/* A */}
      <div className="question-container">
        <select 
          id="inhabitants" 
          className="dropdown" 
          value={inhabitants} 
          onChange={onInhabitantsChange}>
          <option disabled></option>
          <option value="5000">Less than 5000</option>
          <option value="5000-25000">5000 - 25 000</option>
          <option value="25000-100000">25 000 - 100 000</option>
          <option value="100000-500000">100 000 - 500 000</option>
          <option value="500000">More than 500 000</option>
        </select>
      </div>
      <div className="buttons-container">
        <NextQuestionButton
          page={page}
          setPage={setPage}
          currentState={inhabitants}
          defaultState=''
          message="Please select the number of inhabitants where you live first."
          onClick={onNextQuestion} //Change this?
        />
      </div>
    </article>
  );
};

export default QuestionCitySelect