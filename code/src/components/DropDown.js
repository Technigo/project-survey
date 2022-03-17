import React from "react";

const DropDown = ({ location, locationChange }) => {

  return (
    <form>
      <select
        onChange={locationChange}
        value={location}
      >
        <option disabled value=''>Select location:</option>
        <option value="stockholm">Stockholm</option>
        <option value="barcelona">Barcelona</option>
        <option value="oslo">Oslo</option>
      </select>
    </form>
  );
}

export default  DropDown;