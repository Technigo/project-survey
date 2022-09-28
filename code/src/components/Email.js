import React from 'react';

const Email = ({name, email, setEmail, handleStepIncrease, handleStepDecrease}) => {

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  return (
    <section className="container">
        <div className="input-card">
        <h2>Hi there {name}</h2>
        <h3>What is your <b>email address?</b></h3>
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