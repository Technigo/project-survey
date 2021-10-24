import React from "react";

const Healer = ({ classInput, onClassInputChange }) => {
  return (
    <section className="form-container">
      <select value={classInput} onChange={onClassInputChange}>
        <option className="select-default" value="pick class">
          Pick class here
        </option>
        <option value="Shaman">Shaman</option>
        <option value="Priest">Priest</option>
        <option value="Druid">Druid</option>
        <option value="Paladin">Paladin</option>
      </select>
    </section>
  );
};

export default Healer;
