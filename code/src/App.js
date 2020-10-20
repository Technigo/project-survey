import React, { useState } from "react";
import { NameQuestion } from "NameQuestion";

import  Radio from "./Radio";
import Select from "./Select";
import { Summary } from "./Summary";

export const App = () => {
  const [name, setName] = useState('')
  const [ageGroup, setAgeGroup] = useState();
  const [fur, setFur] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };  

  return ( 
    <section className ="wrapper-form">
     <h1 tabIndex="0"> Dream cat!</h1>

     {!showSummary ? (
       <form onSubmit={handleSubmit}>
        <NameQuestion name={name} setName={setName}/>
        <Radio ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
        <Select fur={fur} setFur={setFur} />
        <button type="submit" disabled={name === '' }>Submit </button>
       </form>
        ):(
         <Summary name={name} ageGroup={ageGroup} fur={fur} />
        )}

    </section>  
  
  );
};

