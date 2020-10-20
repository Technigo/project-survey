import React from 'react';



const Select = ( {fur, setFur} ) => { 
    
    return ( 
      <section className="fur-wrapper">      
        <label for="fur"> Choose fur type: </label>
        <select id="fur" name="fur"
            onChange = {event => setFur(event.target.value)}
            value = {fur} 
            required >
              <option  value = "" > Select Fur type:</option>
              <option value = "short" > Short</option>
              <option value = "long" > Long</option>
              <option value = "naked" > Naked </option>
        </select>
        
      </section>
      
    )
  }

  export default Select;