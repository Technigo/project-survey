import React, { useState } from 'react';

export const InputField = ({ labelText, attributeID, type, placeholder }) => {
  const [name, setName] = useState('');

  return (
    <div className="form-group form-group-name">
      <h2>Name state is: {name}</h2>
      <label htmlFor={attributeID}>{labelText}</label>
      <input
        type={type}
        id={attributeID}
        name={attributeID}
        placeholder={placeholder}
        required
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
    </div>
  );
};
