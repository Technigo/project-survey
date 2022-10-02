import React from 'react';

export const Checkbox = ({ label }) => {
  return (
    <label htmlFor="TnC">
      <input type="checkbox" id="termsNconditions" name="TnC" value="Accepted" />
      {label}
    </label>
  )
}