import React, { useState } from "react";

export const FormType = () => {
  const [type, setType] = useState(" ");

  return (
    <div className="each-question">
      <form onSubmit={(event) => event.preventDefault()}>
        <select onChange={(event) => setType(event.target.value)} value={type}>
          <option value="">
            Select what type of housing you're looking for:
          </option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="summer-house">Summer House</option>
        </select>
      </form>
    </div>
  );
};
