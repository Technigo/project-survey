import React from 'react';

import '../styles/InputSelect.scss';

const InputSelect = ({ className, question, value, onSelectChange }) => {
  return (
    <label className={className} htmlFor="InputSelect">
      {question}
      <select id="InputSelect" onChange={onSelectChange} value={value}>
        <option value="">Select</option>
        <option value="1-10">1-10</option>
        <option value="11-20">11-20</option>
      </select>
    </label>
  );
};

export default InputSelect;
