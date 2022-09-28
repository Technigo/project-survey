import React from 'react';

const Question3 = ({ question3, setQuestion3 }) => {
  const handleQuestion3Change = (event) => {
    setQuestion3(event.target.value)
  }

  return (
    <div>
      <p>What do you think again?</p>
      <input type="text" value={question3} onChange={handleQuestion3Change} />
    </div>
  );
}

export default Question3;