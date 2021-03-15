import React, { useState } from 'react';

const Question2 = () => {
  const [sushi, setSushi] = useState('');

  const handleChange = (e) => {
    setSushi(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="sushi">Favourite sushi? </label>
        <select 
          id="sushi"
          onChange={handleChange}
          value={sushi}
        >
          <option value="">Select sushi</option>
          <option value="maki">Maki</option>
          <option value="uramaki">Uramaki</option>
          <option value="sashimi">Sashimi</option>
          <option value="temaki">Temaki</option>
          <option value="nigiri">Nigiri</option>
          <option value="gunkan">Gunkan</option>
        </select>
      </div>
    </>
  )
}

export default Question2;