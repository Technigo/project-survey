import React, { useState } from "react";
import "./app.css"
// import { Agequest } from "./QuestRadio";
// import { Selectanimal } from "./QuestAnimal";
// import { Myname } from "./QuestName";
import { Summery } from "./Summery"
import { Button } from "./Button"

const ageGroups = ["18-25", "19-34", "35+"];

export const App = () => {

  const [name, setName] = useState("");
  const [ageGroup, setAgeGroup] = useState();
  const [animal, setAnimal] = useState('');
  const [showSummery, setShowSummery] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummery(true);
  };

  return (
    <div className="container">
      <label>
        <h1>My pet survey:</h1>
      </label>
      
      {!showSummery ? (

      <form onSubmit={handleSubmit}>
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
          placeholder="Name please.."
          />
        </label>

        <section>
          <h3>How old are you?</h3>
          {ageGroups.map(group => (
            <label key={group}>
              <input 
                type="radio"
                value={group}
                required
                onChange={event => setAgeGroup(event.target.value)}
                checked={ageGroup === group}
              />
              {group}
            </label>
          ))}
        </section>

        <label>
          <h3>What is your favorite animal?</h3>
          <select className="dropdown-select"
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
        <Button title="Submit" className="primary" type="submit" />
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
