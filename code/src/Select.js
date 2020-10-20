import React, { useState } from 'react';



const Select = ( {location, setLocation } ) => {
    
    return ( 
        <label>
        <select name="Location" required 
            onChange = {event => setLocation(event.target.value)}
            value = {location} 
        >
            <option value = "" > Select Location:</option>
            <option value = "stockholm" > Stockholm</option>
            <option value = "barcelona" > Barcelona</option>
            <option value = "oslo" > Oslo</option>

       </select>
     </label> 
    )
  }

  export default Select;