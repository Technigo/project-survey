import React from 'react';

const InputSelect = ({
  className,
  question,
  select,
  onSelectChange,
  array,
}) => {
  return (
    <label className={className} htmlFor="InputSelect">
      {question}
      <select
        id="InputSelect"
        onChange={onSelectChange}
        value={select}
        required
      >
        {array.map(item => (
          <option tabIndex="0" key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </label>
  );
};

export default InputSelect;
