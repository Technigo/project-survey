import React from 'react';

const Email = ({name, email, setEmail, handleStepIncrease, handleStepDecrease}) => {

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  return (
    <section className="container">
        <div className="input-card">
        <h4>Hi there {name}</h4>
        <h3>What is your <b>email address?</b></h3>
          <input type="text" Placeholder="Type your email address here" value={email} onChange={handleEmailChange}
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