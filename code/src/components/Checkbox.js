import React from 'react';

export const Checkbox = ({ label }) => {
  return (
    <label className="center-text" htmlFor="TnC">
      <input className="checkbox" type="checkbox" id="termsNconditions" name="TnC" value="Accepted" />
      {label}
    </label>
  )
}