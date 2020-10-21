import React, { useState } from 'react';

const SelectCopings = () => {
  const [selectCoping, setSelectCoping] = useState(" ");

  return (
    <form className="QCard">
      <h3>How do you cope?</h3>
      <select
        onChange={event => setSelectCoping(event.target.value)}
        value={selectCoping}
      >
        <option value="I don't">I don't</option>
        <option value="Pills">Pills</option>
        <option value="Sorbet">Sorbet</option>
        <option value="My body, my choice">My body, my choice</option>
      </select>
    </form>

  );


};

export default SelectCopings