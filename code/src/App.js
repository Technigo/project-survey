import React, { useState } from 'react'
import { Dropdown } from "./Dropdown.js"
import { Radiobutton } from "./Radiobutton.js"
import { Submit } from "./Submit.js"
import { Summary } from "./Summary.js" 

export const App = () => {
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

      <div className="App">
        <Dropdown label="City" value1="Stockholm" value2="Göteborg" value3="Malmö" />
        <Dropdown label="Country" value1="Sweden" value2="Norway" value3="Other" />
      </div>

      <div className="radiobutton">
        <Radiobutton label="age" group1="0-20"  group2="21-30" group3="31-100" />
      </div>

      <div className="submit">
        <Submit text="Submit!" onClick={event => (event.target.value)}/>
        </div>
        </section>
        </form>
  

  {showSummary && <Summary />} 
      </div>
    
  );
}
