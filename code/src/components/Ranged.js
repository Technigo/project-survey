import React from "react";

const Ranged = ({ classInput, onClassInputChange }) => {
  return (
    <section className="form-container">
      <select value={classInput} onChange={onClassInputChange}>
        <option className="select-default" value="pick class">
          Pick class here
        </option>
        <option value="Priest">Priest</option>
        <option value="Shaman">Shaman</option>
        <option value="Druid">Druid</option>
        <option value="Hunter">Hunter</option>
        <option value="Mage">Mage</option>
        <option value="Warlock">Warlock</option>
      </select>
    </section>
  );
};

export default Ranged;
