import React, { useState } from 'react';

const Section2 = (props) => {
  const [data, setData] = useState('');

  return (
    <>
      <h2>Section 2| Your recently purchased reasons: </h2>
      <p>- What is the main factor for you to purchese our product</p>
      <form>
        <select onChange={(e) => setData(e.target.value)} value={data}>
          <option value="">Main Factor is about... </option>
          <option value="design">Design</option>
          <option value="features">Features</option>
          <option value="price">Price</option>
          <option value="other">Other</option>
        </select>

        <button type="button" onClick={() => props.onNextStep()}>
          continue
        </button>

        <button type="button" onClick={() => props.onPrevStep()}>
          Previous
        </button>
        <pre>reason {data}</pre>
      </form>
    </>
  );
};

export default Section2;
