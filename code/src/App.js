import React, { useState } from 'react'
/*import ReactDOM from "react-dom";*/
/*import React, { useState } from 'react'*/
import { Header } from './Header'
import { Button } from './Button'
import { Drop } from './Drop'
import { Radio } from './Radio'
import { Submit } from './Submit'


const ageGroups = ["0-18", "19-30", "30+"];

/* Down below from Technigo
export const App = () => {
  return (
    <div>
      Find me in src/app.js!
    </div>
  
  )
} */
//const [submitted, setSubmitted] = useState(false)

export const App = () => {
  const [temperature, setTemperature] = useState(20);
  const [location, setLocation] = useState("");
  const [ageGroup, setAgeGroup] = useState();
  const [submit, setSubmit] = useState(false);
  
  return (
  <div>
    <form onSubmit={event => event.preventDefault()}>
       <div className="button">
        
        <h3> Current temperature is {temperature} </h3> 
        {/*<h1>Current temp> {temperature} degrees </h1> */}
    
        <button onClick={() => setTemperature(-5)}>Freeze!</button>
        <button onClick={() => setTemperature(5)}>Ok!</button>
        <button onClick={() => setTemperature(125)}>Hot!</button>

         {temperature > 100 && <p>Steamy!</p>}  
      </div>

      <div>
            <h3> Where shall we move? </h3>  
            <select
            onChange={event => setLocation(event.target.value)}
            value={location}
        
            >
            
            <option value=" ">Select location</option>
            <option value="stockholm">Stockholm</option>
            <option value="miami">Miami</option>
            <option value="palma">Palma</option>
            
            </select>    
        </div>

        <div>
        Age Group:
        {ageGroups.map(group => (
            <label key={group}>
                <input
                    type="radio"
                    value={group}
                    onChange={event => setAgeGroup(event.target.value)}
                    checked={ageGroup === group}
                />
            {group}
            </label>
        ))} 
        </div>
      
     
      <button
      onClick={() => setSubmit(true)}
    >SUBMIT</button>

  </form>

  {Submit && <Submit location={location} group={ageGroup} temperature={temperature}/>}

</div>

);
};

      //*  <Header />
        //<Button />
        //<Drop />
        //<Radio />
        //<Submit />
    //</div>
    
    //);
  //}; }

//<button onClick={() => setSubmitted(true)} 
  //type="submit">Submit 
//</button>

//{submitted && <Summary name={name} number={number} />}

