import React, { useState } from 'react';

export const Checkbox = () => {
  const [checkedItems, setCheckedItems] = useState({}); // plain object as state

  const handleChange = (event) => {
    // mutate the current Map
    checkedItems.set(event.target.name, event.target.checked)
    // update the state by creating a new Map
    setCheckedItems(new Map(checkedItems));
    console.log('checkedItems: ', checkedItems);
  }

  const checkboxes = [
    {
      name: 'check-box-1',
      key: 'checkBox1',
      label: 'Check Box 1'
    },
    {
      name: 'check-box-2',
      key: 'checkBox2',
      label: 'Check Box 2'
    }
  ];
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>Checked item name : {checkedItems['check-box-1']} </label> <br />
      {
        checkboxes.map((item) => (
          <label key={item.key}>
            {item.name}

          </label>
        ))
      }
    </form>
  );
}

export default Checkbox