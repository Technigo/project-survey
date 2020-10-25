import React, {useState} from 'react';
import "./index.css";
import "./app.css";
import {Summary} from "./Summary";
import {NameQuestion} from "./NameQuestion";
import {AnimalQuestion} from "./AnimalQuestion";
import {SureQuestion} from "./SureQuestion";
import {OtherAnimalQuestion} from "./OtherAnimalQuestion"

export const App = () => {
   const [name, setName] = useState("");
   const [animal, setAnimal] = useState("");
   const [sure, setSure] = useState("");
   const [otherAnimal, setOtherAnimal] = useState("");
   const [showSummary, setShowSummary] = useState(false);


   const handleSubmit = event => {
     event.preventDefault();
     setShowSummary(true);
   };


  return (
    <div className="App">
      <h1>Survey project!</h1>

      {!showSummary &&
      <form onSubmit={handleSubmit}>
        <NameQuestion name={name} setName={setName} />
        <AnimalQuestion animal={animal} setAnimal={setAnimal}/>
        <SureQuestion sure={sure} setSure={setSure} />
        <OtherAnimalQuestion otherAnimal={otherAnimal} setOtherAnimal={setOtherAnimal} />
        <button type="submit">Submit answer!</button>
      </form> 
      }



      {/* Answer section  */}
      {showSummary && <Summary 
      name={name}
      animal={animal}
      otherAnimal={otherAnimal}
      />}
    </div>
  );
};
