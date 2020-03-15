import React from 'react';

export const Summary = props => {
  const { gender, frequency, action1, action2, suggestion } = props;
  return (
    <div className='summary-container'>
      <h1>SUMMARY</h1>
      <p>You're gender is {gender}</p>
      <p>You feel stressed {frequency}</p>
      <p>
        When you feel stressed you usually {action1} or {action2}
      </p>
      {suggestion ? (
        <p>You will get some suggestions from us that might help you better.</p>
      ) : (
        <p>
          I'm not gonna give you any suggestions, but maybe you'll change your
          mind about that...
        </p>
      )}
    </div>
  );
};

export default Summary;
