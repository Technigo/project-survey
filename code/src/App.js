import React, { useState } from "react";
// import { Agequest } from "./QuestRadio";
// import { Selectanimal } from "./QuestAnimal";
// import { Myname } from "./QuestName";
import { Summery } from "./Summery"
import { Button } from "./Button"

const ageGroups = ["18-25", "19-34", "35+"];

export const App = () => {

  
  // const [ageGroup, setAgeGroup] = useState();
  const [name, setName] = useState("");
  const [ageGroup, setAgeGroup] = useState();
  const [animal, setAnimal] = useState('');
  const [showSummery, setShowSummery] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummery(true);
  };


  return (
    <div>
      <h1>My pet survey:</h1>

      {!showSummery ? (

      <form onSubmit={handleSubmit}>
      {/* <p>{name}</p> */}
      {/* <Agequest /> */}
      {/* <Selectanimal /> */}
      {/* <Myname /> */}

        <label>
          <h3>What is your name?</h3>
          <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          required
          placeholder="name here.."
          // onKeyPress={(event) => event.key === "Enter" && event.preventDefault()}
          />
        </label>

        <div>
          <h3>How old are you?</h3>
          {ageGroups.map(group => (
            <label key={group}>
              <input 
                type="radio"
                value={group}
                onChange={event => setAgeGroup(event.target.value)}
                checked={ageGroup === group}
                required
              />
              {group}
            </label>
          ))}
        </div>

        <label>
          <h3>What is your favorite animal?</h3>
          <select
            onChange={event => setAnimal(event.target.value)}
            value={animal}            
          >
            <option value="">Select animal:</option>
            <option value="guinea pig's">Guinea pig</option>
            <option value="guinea pig's">Guinea pig, again</option>
            <option value="guinea pig's">Guinea pig, of course!</option>                      
          </select>
        </label>
        {/* <button type="submit">submit</button> */}
        <Button title="Submit form" className="primary" type="submit" />

      </form>

      ) : (
      <Summery name={name} animal={animal} ageGroup={ageGroup}/> 
      )}
    </div>
  );
};


/*

      {showSummery && <section>
        <h1>Hi {name} ! You are {ageGroup} years old and absolutley love {animal}'s!</h1>
        
      </section>}





*/
