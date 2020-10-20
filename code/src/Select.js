import React from 'react';



const Select = ( {fur, setFur} ) => { 
    
    return ( 
        <label id="fur" name="fur type">
        <select name="Location" 
            onChange = {event => setFur(event.target.value)}
            value = {fur} 
            required >
              <option value = "" > Select Fur type:</option>
              <option value = "short" > Short</option>
              <option value = "long" > Long</option>
              <option value = "naked" > Naked </option>
        </select>
      </label> 
    )
  }

  export default Select;