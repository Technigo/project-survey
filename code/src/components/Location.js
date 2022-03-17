import React, { useState } from "react";


    const Location = ({city, onCityChange, onStepChange, onBackstepChange}) => {
     
    return (
        <section className="question-container">
          <label htmlFor="city">
              <h2>In which city did you join our event?</h2>
              </label>
          <div className="location-box">
            <select onChange={onCityChange} value={city}>
            <option value="">Select location:</option>
            <option value="Stockholm">Stockholm</option>
            <option value="Gothenburg">Gothenburg</option>
            <option value="Copenhagen">Copenhagen</option>
          </select>
          <div className="locationButtons">
        <button onClick={onStepChange} disabled={city===""}>OK</button>
        <button onClick={onBackstepChange}>back</button>
        </div>
        </div>
    </section>
    )
}

export default Location