import React from "react";

const Tank = ({ classInput, onClassInputChange }) => {
  return (
    <section className="form-container">
      <select value={classInput} onChange={onClassInputChange}>
        <option className="select-default" value="pick class">
          Pick class here
        </option>
        <option value="Warrior">Warrior</option>
        <option value="Druid">Druid</option>
        <option value="Paladin">Paladin</option>
      </select>
    </section>
  );
};

export default Tank;
