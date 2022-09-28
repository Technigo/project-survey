import React from 'react';

const Question2 = ({ question2, setQuestion2 }) => {
  const handleQuestion2Change = (event) => {
    setQuestion2(event.target.value)
  }

  return (
    <div>
      <p>What do you think?</p>
      <input type="text" value={question2} onChange={handleQuestion2Change} />
    </div>
  );
}

export default Question2;