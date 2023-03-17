import React from 'react';

export const Shape = ({ shape, setShape }) => {
  const handleShape = (event) => {
    setShape(event.target.value);
    
  }
  return (
    <div className="shape-container">
      <p className="question">If you had to choose a name for the shape to the right out of the options below, what would it be?</p>
      <form>
        <select
          onChange={handleShape}
          value={shape}>
          <option selected value="">Choose one</option>
          <option value="kiki">Kiki</option>
          <option value="bouba">Bouba</option>
        </select>
      </form>
    </div>
  );
}

