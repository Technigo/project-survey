import React, {useState} from "react";
import "./styles.css";


export const App = () => {

const [name, setName] = useState ("");
const [password, setPassword] = useState ("");
const [age, setAge] = useState ("");

const handleSubmit = event => {
  event.preventDefault ();

};
  return (
    <div className="App">
      <h1>Hey hey!</h1>
      <form onSubmit={handleSubmit}>
        <lable>
          What is your name?
          <input
          type="text"
          value={name}
          OnChange={event => setName (event.target.value)}
          required
          />
        </lable>
        <lable>
        What is your password?
          <input
          type="password"
          value={password}
          OnChange={event => setPassword (event.target.value)}
          required
          />
        </lable>
        <lable>
          What is your age?
          <input
          type="age"
          value={age}
          OnChange={event => setAge (event.target.value)}
          required
          />
        </lable>
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};
