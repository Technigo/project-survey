import React from "react";

import NextQuestionButton from './NextQuestionButton'

const TextInputProposal = ({
  proposal,
  setProposal,
  page,
  setPage,
  onProposalChange,
  onNextQuestion,
  message
}) => {
  
  return (
    <article className="form-question-4">
      {/* Question */}
      <label htmlFor="proposal" className="form-question" tabIndex="0">
        Do you have any other thoughts or proposals of what stage art you would like to experience post Covid-19?
      </label>

      {/* Input */}
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
        defaultState=""
        message="Please write your ideas here, thank you!"
        onClick={onNextQuestion}
      />
      </div>
    </article>
  );
};
export default TextInputProposal;