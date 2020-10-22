import React, { useState } from "react";

import { NameQuestion } from "Questions/NameQuestion";
import  Radio from "./Questions/Radio";
import Select from "./Questions/Select";
import { Summary } from "./Summary";


//Here is my improved code for the BLUE LEVEL.


export const Form = () => {
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

     {!showSummary ? (
       <form onSubmit={handleSubmit}>

       <NameQuestion 
        name={name} 
        setName={setName}/>

        <Radio 
        ageGroup={ageGroup}
         setAgeGroup={setAgeGroup} />

        <Select 
        fur={fur}
        setFur={setFur} />

      <button type="submit" disabled={name === '' }>Submit </button>

       </form>

        ):(
         <Summary
          name={name} 
          ageGroup={ageGroup} 
          fur={fur} />
        )}
    </section>  
  
  );
};

export default Form;
