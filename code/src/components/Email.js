import React from 'react';

const Email = ({name, email, setEmail, handleStepIncrease, handleStepDecrease}) => {

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  return (
    <section className="container">
        <div className="input-card">
        <h2>Hi there {name}</h2>
          <p>What's your email?</p>
          <input type="text" value={email} onChange={handleEmailChange}
          />
        </div>

        <div className="button-card">
        <button type="button" onClick={handleStepDecrease}>Previous question</button>
           <button type="button" onClick={handleStepIncrease}>Next question</button>
        </div> 
    </section>
  );
}

export default Email