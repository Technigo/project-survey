import React from "react"
import "./checkbox.css"

export const Checkbox = ({ isEighteen, setIsEighteen }) => (
  <label className="checkboxLabel">
    I'm over 18
        <input
      type="checkbox"
      checked={isEighteen}
      onChange={event => setIsEighteen(event.target.checked)}
      required
    />
  </label>
)