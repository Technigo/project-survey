import React, { useState } from "react"
import "./checkbox.css"

export const Checkbox = () => {
  const [isEighteen, setIsEighteen] = useState(false);

  return (
    <label className="checkboxLabel">
      I'm over 18
        <input
        type="checkbox"
        checked={isEighteen}
        onChange={event => setIsEighteen(event.target.checked)}
      />
    </label>
  );
};