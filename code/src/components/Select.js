import React from 'react';

export const Select = ({ specialGroup, setSpecialGroup }) => {
  return (
    <form className="form" onSubmit={(event) => event.preventDefault()}>
      <h3 className="mainQuestion">Do you belong to any of the following groups?</h3>
      <select
        onChange={(event) => setSpecialGroup(event.target.value)}
        value={specialGroup}>
        <option disabled value="">Select group:</option>
        <option value="pregnant or post partum">Pregnant or post-partum women</option>
        <option value="living with a disability">Living with disability</option>
        <option value="living with a chronic condition">Living with a chronic condition</option>
        <option value="none">None</option>
      </select>
    </form>
  );
}
