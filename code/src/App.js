
import React, {useState} from 'react'
import { Summary } from "./Summary.js"

export const App = () => {

const [answername, setAnswername] = useState ("");
const [answeraddress, setAnsweraddress] = useState ("");
const [coffee, setCoffee] = useState ("");
const [coffeeprice, setCoffeeprice] = useState ("");
const [coffeeamount,setCoffeeamount] = useState ("");

const [showSummary, setShowSummary] = useState (false);

const handleSubmit = event => {
  event.preventDefault();
  setShowSummary(true);
};

  return (
    <>
    <h1>Hello! Let's find out what is your cup of coffee?</h1>
    {/* if the form is submitted the summary is being displayed and the form is hidden */}
    {! showSummary ? ( 
    <form onSubmit={handleSubmit}>
      <p>{answername}</p>
      {/* first question */}
  <label>What is your name?
  <input
  type="text"
  value = {answername}
  onChange = {event => setAnswername(event.target.value)}
  required
  /></label>
  {/* second question */}
  <label>What is your adress?
  <input
  type="text"
  onChange = {event => setAnsweraddress(event.target.value)}
  value = {answeraddress}
  required
  /></label>
  {/* third question dropdown */}
<label>What is your favourite drink?
  <select
  onChange = {event => setCoffee(event.target.value)}
  value = {coffee}
  >
    <option value="">Select your drink please:</option>
    <option value="expresso">Espresso</option>
    <option value="latte">Latte</option>
    <option value="macchiato">Macchiato</option>
    <option value="cappucino">Cappucino</option>
    </select> 
    </label>
    {/* forth question radio buttons */}
    How many cups of coffee do you drink per week?
    <label>
      <input type="radio"
          onChange = {event => setCoffeeamount(event.target.value)}
          value = ">5"
          checked = {coffeeamount === ">5"}
            >
      </input>
    </label>
      <label> 0-3
      <input type="radio"
          onChange = {event => setCoffeeamount(event.target.value)}
          value = "0-3"
          checked = {coffeeamount === "0-3"}
            >
      </input>
    </label>
      <label>3-7
      <input type="radio"
          onChange = {event => setCoffeeamount(event.target.value)}
          value = "3-7"
          checked = {coffeeamount === "3-7"}
            >
      </input>
    </label>
    <label>7+
      <input type="radio"
          onChange = {event => setCoffeeamount(event.target.value)}
          value = "7+"
          checked = {coffeeamount === "7+"}
            >
      </input>
    </label>
{/* fifth question range */}
      <label>How much do you think a decent cup of coffee should cost?
  <input type="range"
  onChange = {event => setCoffeeprice(event.target.value)}
  min="1" max="6" value={coffeeprice} className="slider" id="myRange"/>
    </label>
    <button type="submit">submit</button>
    </form>
    ) : ( <Summary name = {answername}
                            address = {answeraddress}
                            coffee = {coffee}/>
    )}

    {/* {showSummary && <Summary name = {answername}
                            address = {answeraddress}
                            coffee = {coffee}/>} */}
    </>
  );
}
