import React from "react";


const TextInputProposal = ({
  proposal,
  setProposal,
  page,
  setPage,
}) => {
  //One way data-binding
  const onProposalChange = (event) => {
    setProposal(event.target.value);
  };

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
    </article>
  );
};
export default TextInputProposal;