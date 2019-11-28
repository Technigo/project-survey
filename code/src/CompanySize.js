import React, { useState } from "react";

export const CompanySize = () => {
  const [size, setSize] = useState();
  return (
    <form onSubmit={event => event.preventDefault()}>
      How big is your company?
      {sizeComp.map(group => (
        <label key={group}>
          <input
            type="radio"
            onChange={event => setSize(event.target.value)}
            value={group}
            checked={size === group}
          ></input>
        </label>
      ))}
      <h2>{size} </h2>
    </form>
  );
};
