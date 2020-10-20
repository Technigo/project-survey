import React, { useState } from "react";
import { NameQuestion } from "NameQuestion";
import { PasswordQuestion }from "PasswordQuestion";

import  Radio from "./Radio";
import Select from "./Select";
import { Summary } from "./Summary";

export const App = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [radio, setRadio] = useState('')
  const [location, setLocation] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };  

  return ( 
    <div className ="wrapper-form">
     <h1>Welcome!</h1>

     {!showSummary ? (
       <form onSubmit={handleSubmit}>
        <NameQuestion name={name} setName={setName}/>
        <PasswordQuestion password={password} setPassword={setPassword}/>
        <Radio radio={radio} setRadio={setRadio} />
        <Select location={location} setLocation={setLocation} />
        <button type="submit" disabled={name === '' || password === ''}>Submit </button>
       </form>
        ):(
         <Summary name={name} password={password} radio={radio} location={location} />
        )}

    </div>  
  
  );
};

