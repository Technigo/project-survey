import React, { useState } from "react";

export const DropDownQ = () => {
  const [dog, setDog] = useState("");
  return (
    <form>
      <select
        type="text"
        onChange={event => setDog(event.target.value)}
        value={dog}
      >
        <option value="">What is your favourite tye of animal</option>
        <option value="dog">Tame wolf</option>
        <option value="dog">Dog</option>
        <option value="dog">Canis domesticus</option>
      </select>
    </form>
  );
};
