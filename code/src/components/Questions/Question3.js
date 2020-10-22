import React from 'react';

const SelectCopings = ({ coping, onCopingChange }) => {
  // const [selectCoping, setSelectCoping] = useState(" ");

  return (
    <div className="card">
      <h3 className="question">How do you cope?</h3>
      <select
        value={coping}
        onChange={e => onCopingChange(e.target.value)} >
        <option value="I don't">I don't</option>
        <option value="Pills">Pills</option>
        <option value="Sorbet">Sorbet</option>
        <option value="My body, my choice">My body, my choice</option>
      </select>
    </div>

  );


};

export default SelectCopings;