import React from 'react';

export const Shape = ({ shape, setShape }) => {
  const handleShape = (event) => {
    setShape(event.target.value);
  }
  return (
    <div className="shape-container">
      <div className="question">What would you choose to call the blue hair style?</div>
      <form>
        <select
          onChange={handleShape}
          value={shape}>
          <option selected value="">Hair styles</option>
          <option value="kiki">Kiki</option>
          <option value="bouba">Bouba</option>
        </select>
      </form>
    </div>
  );
}

