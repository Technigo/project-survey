import React from 'react';

const ImportantOption = ({ importantValue, setImportantValue }) => {
  const handleImportantChoice = (event) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setImportantValue(isChecked)
    }

    console.log({ importantValue });
  };

  return (
    <>
      <h3>Are any of these important to you?</h3>
      <form>
        <label htmlFor="vegan">
          <input
            type="checkbox"
            id="vegan"
            name="vegan"
            value="vegan"
            onChange={handleImportantChoice}
            checked={importantValue.includes('vegan')} />
        Vegan
        </label>
        <label htmlFor="sugarfree">
          <input
            type="checkbox"
            id="sugarfree"
            name="sugarfree"
            value="sugarfree"
            onChange={handleImportantChoice}
            checked={importantValue.includes('sugarfree')} />
        Sugarfree
        </label>
        <label htmlFor="ecological">
          <input
            type="checkbox"
            id="ecological"
            name="ecological"
            value="ecological"
            onChange={handleImportantChoice}
            checked={importantValue.includes('ecological')} />
        Ecological
        </label>
      </form>
    </>
  );
};

export default ImportantOption;