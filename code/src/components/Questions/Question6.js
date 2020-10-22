import React from 'react';

// const [selectTopping, setSelectTopping] = useState(" ");
const SelectToppings = ({ topping, onToppingChange }) => {

  return (
    <div className="card">
      <h3 className="question"> Which is your favorite topping?</h3>
      <select
        value={topping}
        onChange={e => onToppingChange(e.target.value)} >
        <option value="chocolate">Chocolate</option>
        <option value="jam">Jam</option>
        <option value="candy">Candy sprinkle</option>
        <option value="nuts">Nuts</option>
      </select>
    </div>

  );
};

export default SelectToppings