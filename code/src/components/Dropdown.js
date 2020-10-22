import React from 'react';

import 'components/DropdownCss.css';

export const Dropdown = ({questionSweets, sweet, setSweet}) => {
    
    return (
      <label 
        htmlFor="choose" 
        id="choose"
        className="form-dropdown">
        <h2 tabindex="0">3. What's your fav sweet?</h2>
        <div className="select-container">
          <select
            onChange={(event) => setSweet(event.target.value)}
            value={sweet}
            required
          >
            <option value="">Choose wisely...</option>
            <option tabindex="0" value="chocolat">Chocolat!</option>
            <option tabindex="0" value="licorice">Licorice!</option>
            <option tabindex="0" value="sour sweets">Sour sweets!</option>
          </select>
        </div>
      </label>
    );
};

