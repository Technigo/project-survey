import React from "react";

const DropDown = ({ location, locationChange }) => {
      
//    const [location, setLocation] = useState("");

// const locationChange = (event) => {
//     setLocation(event.target.value);
// };

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