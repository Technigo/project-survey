// import React, from 'react'

// export const DropDown = (props) => {

//     const [location, setLocation] = useState("");

//     return (
// <div>
// <select
//         onChange={(event) => props.setLocation(event.target.value)}
//         value={location}
//       >
//         <option value="">Select location:</option>
//         <option value="stockholm">Stockholm</option>
//         <option value="barcelona">Barcelona</option>
//         <option value="oslo">Oslo</option>
//       </select>

// </div>

//     )
// }

import React, { useState } from "react";


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
        <option value="">Select location:</option>
        <option value="stockholm">Stockholm</option>
        <option value="barcelona">Barcelona</option>
        <option value="oslo">Oslo</option>
      </select>
    </form>
  );
}

export default  DropDown;