import React, { useState } from 'react';

const MemoryQuestion = ({memory, setMemory}) => {

  const handleMemoryChange = (event) => {
    setMemory(event.target.value)
  }

    return (
      <>
      <h2>A memorable visit?</h2>
        <form>
          <label htmlFor="memorable-visit">
            <p>We are interested in hearing if you have a special memory from a visit at 
            one of Stockholm's museums that you wish to share.</p> 
            <p>Perhaps you remember a certain exhibit fondly, or have a mildly traumatic 
            experience related to a boring visit?</p>
            </label>
            <textarea
            type ="text"
            id="memorable-visit"
            className="memory-input"
            placeholder="A memorable visit..."
            aria-live="polite"
            onChange={handleMemoryChange}
            value={memory}
            />
        </form>
      </>
    );
  }

  export default MemoryQuestion