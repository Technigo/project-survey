import React, { useState } from 'react'
import "./Components/drop.css";

export const Drop = () => {
    const [location, setLocation] = useState("");

  return (

        <form>
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
        </form>
    );
};