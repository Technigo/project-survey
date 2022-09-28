import React from 'react';

const Summary = ({ name, question2, question3 }) => {
  return (
    <>
      <p>Your name is {name}</p>
      <p>You think {question2}</p>
      <p>You also think {question3}</p>
    </>
  );
}

export default Summary;