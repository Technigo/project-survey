import React from 'react';

const Name = ({name, setName, handleStepIncrease}) => {

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <section className="container">
        <div className="input-card">
          <p>What is your name?</p>
          <input type="reset" value={name} onChange={handleNameChange}
          />
        </div>

        <div className="button-card">
           <button type="button" onClick={handleStepIncrease}>Next question</button>
        </div> 
    </section>
  );
}

export default Name