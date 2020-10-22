import React, { useState } from "react";

import "./styles.css";
import { Summary } from "./Summary";
import { NameQuestion } from "./NameQuestion";
import { StoreQuestion} from "./StoreQuestion";
import { CheckboxQuestions } from "./CheckboxQuestions";

// THIS IS THE PARENT ALL STATES ARE SET HERE


export const App = () => {
  const [name, setName] = useState("");
  const [likeOption, setLikeOption] = useState();
  const [optionBlue, setOptionBlue] = useState("");
  const [showSummary, setShowSummary] = useState(false);



  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
  };


  return (
    <div className="App">
      <h1>Say cheese!</h1>

      {/* Exempel 2, showSummary ? something : something else, kallad =turnery operator */}

      {/* we have this onSubmit=event handelsubmit=function 
      {!showSummary && ( betyder, inte true visa detta eller detta.....*/}

      {!showSummary && (
        <form onSubmit={handleSubmit}>
          <NameQuestion username={name}   handleSetName={setName}/>
          <CheckboxQuestions
            checked={likeOption}
            handleSetPassword={setLikeOption}  />
          <StoreQuestion value={optionBlue} handleSetBlue={setOptionBlue} />
          

          <button type="Submit">Submit</button>
        </form>
      )}
      {/* showSummary samma som === true */}

      {showSummary && <Summary name={name} />}
    </div>
  );
};



