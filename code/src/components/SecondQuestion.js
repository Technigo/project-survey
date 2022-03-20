import React from "react";


export const SecondQuestion=({locationInput, onLocationInputChange, onStepChange })=>{
 
    return(
      <form onSubmit={onStepChange}>
        <fieldset>
        <label htmlFor="city">Choose City:</label>
              <select className="location"
                    id="city"
                    value={locationInput}
                    onChange={onLocationInputChange}
                    required> 
                <option value="">
                    Pick your city
                </option>
             
                <option value="Malmö">
                    Malmö
                </option>
                <option value="Stockholm">
                    Stockholm
                </option>
                <option value="Göteborg">
                    Göteborg
                </option>
                <option value="Umeå">
                    Umeå
                </option>
            </select>
        </fieldset>
        <button  className="btn" type="submit"><span>Next!</span></button>
    </form>
)
}