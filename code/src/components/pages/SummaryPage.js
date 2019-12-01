import React from 'react';

export const SummaryPage = ({ data, goBack }) => {
  const {
    firstName,
    lastName,
    webFramework,
    hobbyCoding,
    yearsSinceLearning,
    role
  } = data;

  return (
    <div className="summary-page">
      <div>
        <h1>Survey summary</h1>
        <p>
          Thank you for participating in this survey
          {`, ${firstName} ${lastName}`}!
        </p>
        <br />
        <br />
        <h4>What's your developer role?</h4>
        <p>{role}</p>
        <br />
        <h4>Do you code outside of work?</h4>
        <p>{hobbyCoding}</p>
        <br />
        <h4>What web framework do you use?</h4>
        <p>{webFramework}</p>
        <br />
        <h4>Years since you learned to code?</h4>
        <p>{yearsSinceLearning}</p>
      </div>
      <div className="form-page-buttons">
        <button type="button" onClick={() => goBack()}>
          Back to survey
        </button>
      </div>
    </div>
  );
};
