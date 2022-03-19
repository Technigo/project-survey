import React from "react";


    const Location = ({city, onCityChange, onStepChange, onBackstepChange}) => {
     
    return (
        <section className="question-container">
          <label htmlFor="city">
              <h2>In which city did you join our event?</h2>
              </label>
          <div className="custom-select">
            <select onChange={onCityChange} value={city}>
            <option value="0">Select location:</option>
            <option value="Stockholm">Stockholm</option>
            <option value="Gothenburg">Gothenburg</option>
            <option value="Copenhagen">Copenhagen</option>
            </select>
            </div>
          <div className="locationButtons">
        <button onClick={onBackstepChange}>back</button>
        <button onClick={onStepChange} disabled={city==="0"}>OK</button>
        </div>
      
    </section>
    )
}

export default Location