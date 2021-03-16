import React, { useState } from "react";

const Dropdown = () => {
  const [howMuch, setHowMuch] = useState(false);

  return (
    <form>
      <label>
        How much do you usually spend on local live gigs each year? 
        <input
          type="checkbox"
          checked={howMuch}
          onChange={(event) => setHowMuch(event.target.checked)}
        />
      </label>
    </form>
  );
};

export default Dropdown;










//  <div>
//  <label htmlFor="season">Favourite season</label>
//  <select id="season">
//    <option>Winter</option>
//    <option>Spring</option>
//    <option>Summer</option>
//    <option>Fall</option>
//  </select>
// </div>