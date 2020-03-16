import React, { useState } from "react"
import "./checkbox.css"

export const Checkbox = () => {
  const [wantsNewsletter, setWantsNewsletter] = useState(false);

  return (
  <label className="checkboxLabel">
        I'm over 18
        <input
          type="checkbox"
          checked={wantsNewsletter}
          onChange={event => setWantsNewsletter(event.target.checked)}
        />
      </label>
  );
};