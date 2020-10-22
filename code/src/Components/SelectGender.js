import React from 'react';

const SelectGender = ({ userGender, onGenderChange }) => {

  return (
    <div>
      <h2 className="question-heading">Vilket är ditt kön?</h2>
      <select 
        value={userGender}
        onChange={e => onGenderChange(e.target.value)}
      >
        <option value="">Välj</option>
        <option value="female">Kvinna</option>
        <option value="male">Man</option>
        <option value="other">Annat</option>
      </select>
    </div>
  );
}

export default SelectGender;