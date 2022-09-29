import React from 'react';

const Question2 = ({ question2, setQuestion2 }) => {
  const handleQuestion2Change = (event) => {
    setQuestion2([...question2, event.target.value])
  }
  return (
    <div>
      <p>What do you think?</p>
      {/* <input type="text" value={question2} onChange={handleQuestion2Change} /> */}
      <label htmlFor="this">
        I think this
        <input
          name={question2}
          type="checkbox"
          id="this"
          value="I think this "
          onChange={(event) => handleQuestion2Change(event)} />
      </label>
      <label htmlFor="that">
        I think that
        <input
          name={question2}
          type="checkbox"
          id="that"
          value="I think that "
          onChange={(event) => handleQuestion2Change(event)} />
      </label>
    </div>
  );
}

export default Question2;