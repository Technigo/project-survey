import React from 'react';

const SushiQuestion = ({ sushi, callbackOnChange }) => {

  const handleSushiChange = (e) => {
    callbackOnChange(e.target.name, e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="sushi">Favourite sushi? </label>
        <select 
          id="sushi"
          onChange={handleSushiChange}
          value={sushi}
          required
          name="sushi"
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

export default SushiQuestion;