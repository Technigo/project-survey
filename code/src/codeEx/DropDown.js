import React, { useState } from "react";


export const Dropdown = () => {
  const [location, SetLocation] = useState("");


  return (
    <form>
      <select
        onChange={event => SetLocation(event.target.value)}
        value={location}
      >
        <option value="">select location</option>
        <option value="new york">New York</option>
        <option value="paris">Paris</option>
        <option value="london">london</option>

      </select>
    </form>
  )

}