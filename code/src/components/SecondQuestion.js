import React from "react";


export const SecondQuestion=({locationInput, onLocationInputChange, onStepChange })=>{
 
    return(
      <form onSubmit={onStepChange}>
        <fieldset>
            <legend>
                <h2>Pick your city!</h2>
            </legend>
           
            
            <select className="Location"
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
        <button className="btn" type="submit"><span>Next!</span></button>
    </form>
)
}