import React, { useState } from 'react'
import { Dropdown } from "./Dropdown.js"
import { Radiobutton } from "./Radiobutton.js"
import { Submit } from "./Submit.js"
import { Summary } from "./Summary.js" 

export const App = () => {
  const [location, setLocation ] = useState('Stockholm');
  const [ageGroup, setAgeGroup] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  } 

  return (
<div>
      <form
      action=""
      onSubmit={handleSubmit}>

    <section>

      <div className="dropdown">
        <Dropdown location={location} setLocation={setLocation} />
      </div>

      <div className="radiobutton">
        <Radiobutton ageGroup={ageGroup} setAgeGroup={setAgeGroup} label="age" group="0-20"  group="21-30" group="31-100" />
      </div>

      <div className="submit">
        <Submit text="Submit!" onClick={event => (event.target.value)}/>
        </div>
        </section>
        </form>
  

  {showSummary && <Summary location={location} ageGroup={ageGroup}/>} 
      </div>
    
  );
}
