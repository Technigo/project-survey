import React from 'react';

export const Summary = props => {
  const { gender, frequency, action1, action2, suggestion } = props;
  return (
    <div className='summary-container'>
      <h1>SUMMARY</h1>
      <p>You're gender is {gender}.</p>
      <p>You feel stressed {frequency}</p>
      <p>
        When you feel stressed you usually {action1} or {action2}.
      </p>
      {suggestion ? (
        <p>
          You will get some suggestions from us that we hope can help you feel
          better.
        </p>
      ) : (
        <p>
          I'm not gonna give you any suggestions, but please come back to us if
          you change your mind.
        </p>
      )}
    </div>
  );
};

export default Summary;
