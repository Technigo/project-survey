import React from 'react';



const Select = ( {fur, setFur} ) => { 
    
    return ( 
      <section className="fur-wrapper">      
        <label for="fur">
        <select name="Fur" 
            onChange = {event => setFur(event.target.value)}
            value = {fur} 
            required >
              <option  value = "" > Select Fur type:</option>
              <option value = "short" > Short</option>
              <option value = "long" > Long</option>
              <option value = "naked" > Naked </option>
        </select>
        </label>
      </section>
      
    )
  }

  export default Select;