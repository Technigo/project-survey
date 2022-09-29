import React from 'react';

export const Select = ({ specialGroup, setSpecialGroup }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h3>Do you belong to any of the following special groups?</h3>
      <select
        onChange={(event) => setSpecialGroup(event.target.value)}
        value={specialGroup}>
        <option value="">Select group:</option>
        <option value="pregnant">Pregnant women</option>
        <option value="disabled">Living with disability</option>
        <option value="chroni-condition">Living with a chronic condition</option>
      </select>
    </form>
  );
}
