import React from 'react';

const Select = ({ fur, setFur }) => { 
    
  return ( 
    <section>      
      <label htmlFor="fur">
        <select
         id="fur"
         name="fur"
         onChange = {event => setFur(event.target.value)}
         value = {fur} 
         required>
          <option value = "" > Select Fur type:</option>
          <option value = "short fur" > Short fur</option>
          <option value = "long fur" > Long fur</option>
          <option value = "no fur " > No fur </option>
        </select>
      </label>
    </section> 
    );
};

export default Select;