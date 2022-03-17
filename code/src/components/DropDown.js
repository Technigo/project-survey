import React from "react";

const DropDown = ({ location, locationChange }) => {

  return (
    <form>
      <select
        onChange={locationChange}
        value={location}
      >
        <option value=''>Select our location:</option>
        <option value="old secret library">old secret library</option>
        <option value="castle ruin in the forest">castle ruin in the forest</option>
        <option value="abandoned school gym basement">abandoned school gym basement</option>
        <option value="botanic garden greenhouses">botanic garden greenhouses</option>
        <option value="degenerated amusement park">degenerated amusement park</option>
      </select>
    </form>
  );
}

export default  DropDown;