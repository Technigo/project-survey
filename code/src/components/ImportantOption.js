import React from 'react';

const ImportantOption = ({ importantValue, setImportantValue }) => {
  const handleCheck = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setImportantValue([...importantValue, value]);
    } else {
      setImportantValue(importantValue.filter((item) => item !== value));
    }
  };

  return (
    <form>
      <label htmlFor="vegan">
        <input
          type="checkbox"
          id="vegan"
          name="vegan"
          value="vegan"
          checked={importantValue.includes('vegan')}
          onChange={handleCheck} />
        vegan
      </label>
      <label htmlFor="sugarfree">
        <input
          type="checkbox"
          id="sugarfree"
          name="sugarfree"
          value="sugarfree"
          checked={importantValue.includes('sugarfree')}
          onChange={handleCheck} />
        sugarfree
      </label>
      <label htmlFor="ecological">
        <input
          type="checkbox"
          id="ecological"
          name="ecological"
          value="ecological"
          checked={importantValue.includes('ecological')}
          onChange={handleCheck} />
        ecological
      </label>
    </form>
  );
};

export default ImportantOption;