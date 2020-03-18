import React, {useState} from 'react'
import {Checkbox} from "./Checkbox"
import {Dropdown} from "./Dropdown"
import {Radiobuttons} from "./Radiobuttons"
import {Summary} from "./Summary"
import './App.css'


export const App = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showSummary, setSummary] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSummary(true);
  };
  return (
    <div className="Input">
    
      {!showSummary ?(
      <form onSubmit={handleSubmit}>
      <h1>CREATE YOUR ACCOUNT </h1>
      <label>
        Username:
      </label>
      <input
        type="texr"
        onChange={event => setName(event.target.value)}
        value={name}
        required
      />
      <label>
        Password:
      </label>
      <input
        type="texr"
        onChange={event => setPassword(event.target.value)}
        value={password}
        required
      />
      <label>
        Email:
      </label>
      <input
        type="texr"
        onChange={event => setMail(event.target.value)}
        value={mail}
        required
      />
      <Radiobuttons />
      <Dropdown />
      <Checkbox />
    
   
      <button type="submit">submit</button>
      </form> ):(
      <Summary name={name}/>
    )}
    </div>
  );
};



