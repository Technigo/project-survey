import React from "react";

import NextQuestionButton from './NextQuestionButton'

const TextInputProposal = ({
  proposal,
  setProposal,
  page,
  setPage,
  onNextQuestion,
  message
}) => {
  const onProposalChange = (event) => {
    setProposal(event.target.value)
  }
  
  return (
    <article className="form-question">
      {/* Q */}
      <label htmlFor="proposal" className="form-question" tabIndex="0">
        Do you have any other thoughts or proposals of what stage art you would like to experience post Covid-19?
      </label>

      {/* A */}
      <div className="question-content-container">
        <input
          id="proposal"
          type="text"
          value={proposal}
          onChange={onProposalChange}
          className="form-input"
          placeholder="Write your ideas here, thank you!"
        />
      </div>
      <div className="buttons-container">
      <NextQuestionButton
        page={page}
        setPage={setPage}
        currentState={proposal}
        defaultState=''
        message="Please write your ideas here, thank you!"
        onClick={onNextQuestion}
        button="Next question button"
        buttontext="Next question"
      />
      </div>
    </article>
  );
};
export default TextInputProposal;