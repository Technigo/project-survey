import React from 'react';

const TestQuestion = ({ testValue, setTestValue }) => {
  return (
    <form>
      <p>Choose test</p>
      <select
        onChange={(event) => setTestValue(event.target.value)}
        value={testValue}>
        <option value="" disabled>Select value:</option>
        <option value="test1">Testing</option>
        <option value="test2">More testing</option>
      </select>
    </form>
  )
}

export default TestQuestion;