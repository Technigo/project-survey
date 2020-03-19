import React, { useState } from "react";
import './Dropdown.css'

export const Dropdown = () => {
  const [location, setLocation] = useState("");

  return (
    <form>
      <label>In what country are you resident?</label>
      <select
        onChange={event => setLocation(event.target.value)}
        value={location}
      >
        
        <option value="">Select location </option>
        <option value="Sweden">Sweden </option>
        <option value="Norway">Norway </option>
        <option value="Danmark">Danmark </option>
        <option value="Finland">Finland </option>
    
      </select>
    </form>
  );
};

