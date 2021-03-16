import React, { useState } from "react";

import NextQuestionButton from './NextQuestionButton'
import Popup from './Popup'


const QuestionCitySelect = () => {
  const [inhabitants, setInhabitants] = useState("5000")
  const [page, setPage] = useState('firstQuestion')

  const onInhabitantsChange = (event) => {
    setInhabitants(event.target.value);
}

  return (
    <article className="form-question-1">
      {/* Q */}
      <label htmlFor="title" className="form__question" tabIndex="0">
        I live in a city with this many inhabitants
      </label>

      {/* A */}
      <div className="question-container">
        <select id="inhabitants" className="dropdown" value={inhabitants} onChange={onInhabitantsChange}>
          <option value="5000">Less than 5000</option>
          <option value="5000-25000">5000 - 25 000</option>
          <option value="25000-100000">25 000 - 100 000</option>
          <option value="100000-500000">100 000 - 500 000</option>
          <option value="500000">More than 500 000</option>
        </select>
      </div>
      {/* Here is navigation -question to self: IS THE DEFAULT STATE {0} OR AS NOW "" ??*/}
      <div className="buttons-container">
        <NextQuestionButton
          whatQuestionNext="secondQuestion"
          page={page}
          setPage={setPage}
          currentState={inhabitants}
          defaultState=""
          message="Please select the amount of inhabitants where you live first"
        />
      </div>
    </article>
  );
};

export default QuestionCitySelect