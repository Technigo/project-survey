import React, { useState } from 'react';
import DropdownCss from 'components/DropdownCss.css';

const Dropdown = ({questionSweets}) => {
  const [location, setLocation] = useState();
    
    return (
      <>
        <form>
          <h2>{questionSweets}</h2>

            <select
              onChange={(event) => setLocation(event.target.value)}
              value={location}
          >
            <option value="">Choose your poison:</option>
            <option value="chocolat">Chocolat of course!</option>
            <option value="licorice">Licorice! What else?!</option>
            <option value="sour sweets">C'mon - sour sweets!</option>
          </select>
        </form>
      </>
    );
};

export default Dropdown