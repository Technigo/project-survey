import React, { useState } from 'react';

const SelectToppings = () => {
  const [selectTopping, setSelectTopping] = useState(" ");

  return (
    <form className="QCard">
      <h3>Which is your favorite topping?</h3>
      <select
        onChange={event => setSelectTopping(event.target.value)}
        value={selectTopping}
      >
        <option value="chocolate">Chocolate</option>
        <option value="jam">Jam</option>
        <option value="candy">Candy sprinkle</option>
        <option value="nuts">Nuts</option>
      </select>
    </form>

  );
};

export default SelectToppings