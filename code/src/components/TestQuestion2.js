import React from 'react';

const TestQuestion2 = ({ testValue2, setTestValue2 }) => {
  return (
    <form>
      <p>ANOTHER TEST</p>
      <select
        onChange={(event) => setTestValue2(event.target.value)}
        value={testValue2}>
        <option value="" disabled>Select value:</option>
        <option value="test1">TEST</option>
        <option value="test2">TEST AGAIN</option>
      </select>
    </form>
  )
}

export default TestQuestion2;