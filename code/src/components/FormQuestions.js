/* eslint-disable linebreak-style */

import React from 'react'

const FormQuestions = ({ anamnes, onAnamnesChange }) => {
  return (

    <div>
      <div className="anamnes">
        <label htmlFor="symptoms">Anamnes</label>

      </div>
      <select
        className="box"
        onChange={onAnamnesChange}
        value={anamnes}>
        <option value="">In the past 6 months did you have:</option>
        <option value="had COVID-19">COVID-19 infection</option>
        <option value="had antibodies against coronavirus">Antibodies against coronavirus</option>
        <option value="had positive swab test for coronavirus">Positive swab test for coronavirus</option>
        <option value="had vaccination against coronavirus">Vaccination against COVID-19</option>
        <option value="am not aware of been infected by COVID-19">I am not aware of been infected by COVID-19</option>
      </select>
    </div>
  )
}

export default FormQuestions