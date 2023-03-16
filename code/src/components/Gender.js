import React from 'react';
import './Dropdown.css';
import './Food.css';

export const Gender = ({ gender, setGender }) => {
  const handleGender = (event) => {
    setGender(event.target.value);
  }
  return (
    <div className="dropdown">
      <span className="gender-title">Gender</span>
      <form>
        <select
          onChange={handleGender}
          value={gender}>
          <option value=" " id="option">Gender:</option>
          <option value="woman" id="option">Woman</option>
          <option value="man" id="option">Man</option>
          <option value="other" id="option">Other</option>
        </select>
      </form>
    </div>
  );
}

export default Gender;