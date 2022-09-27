import React, { useState } from 'react';

const MemoryQuestion = ({memory, setMemory}) => {

  const handleMemoryChange = (event) => {
    setMemory(event.target.value)
  }

    return (
      <div>
      <h2>A memorable visit?</h2>
        <form>
          <p>We are interested in hearing if you have a special memory from a visit at 
            one of Stockholm's museums that you wish to share. Perhaps you remember a certain 
            exhibit fondly, or have a mildly traumatic experience related to a boring visit? Please share!</p>
            <input
            type ="text"
            placeholder="A memorable visit..."
            onChange={handleMemoryChange}
            value={memory}
            />
        </form>
      </div>
    );
  }

  export default MemoryQuestion