import React, { useState } from 'react';

const SelectDropdown = () => {
  const [selected, setSelected] = useState('');

  return (
    <form>
      <select
        onChange={(event) => setSelected(event.target.value)}
        value={selected}
      >
        <option value=""> Select location:</option>
        <option value="Test1"> Test1</option>
        <option value="Test2"> Test2</option>
        <option value="Test3"> Test3</option>
      </select>
    </form>
  );
};

export default SelectDropdown;
