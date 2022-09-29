import React from 'react';


const Pun = ({pun, setPun, handleStepIncrease, handleStepDecrease}) => {
  const handlePunChange = (event) => {
    setPun(event.target.value);
  }
  return (
    <section className="container">
      <div className="input-card">
        <h3>Which pun is <b>the funniest?</b></h3>
      <label>
      <div className="radio-button">
      <div className="radio-button-button">
          <input 
          type = "radio"
          value="What did the grape say when it got crushed? Nothing, it just let out a little wine."
          onChange = {handlePunChange}
          checked= {pun === "What did the grape say when it got crushed? Nothing, it just let out a little wine."}
          >
          </input>
          </div>
          <div className="radio-button-joke">
          What did the grape say when it got crushed? Nothing, it just let out a little wine.
          </div> 
          </div> 

          <div className="radio-button">
          <div className="radio-button-button">
          <input 
          type = "radio"
          value="A crazy wife says to her husband that moose are falling from the sky. The husband says, it’s reindeer."
          onChange = {handlePunChange}
          checked= {pun === "A crazy wife says to her husband that moose are falling from the sky. The husband says, it’s reindeer."}
          >
          </input>
          </div>
          <div className="radio-button-joke">
          A crazy wife says to her husband that moose are falling from the sky. The husband says, it’s reindeer
          </div> 
          </div>

          <div className="radio-button">
         <div className="radio-button-button">
          <input 
          type = "radio"
          value="Ladies, if he can’t appreciate your fruit jokes, you need to let that mango."
          onChange = {handlePunChange}
          checked= {pun === "Ladies, if he can’t appreciate your fruit jokes, you need to let that mango."}
          >
          </input>
          </div>
          <div className="radio-button-joke">
          Ladies, if he can’t appreciate your fruit jokes, you need to let that mango.
          </div>
          </div> 
       </label>

      </div>
      <div className="button-card">
        <button type="button" onClick={handleStepDecrease}>Previous question</button>
        <button type="button" onClick={handleStepIncrease}>Next question</button>
       
        </div>
    </section>
  );
}
export default Pun

