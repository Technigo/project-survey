import React from "react"

export const Specials = ({GlutenFree, setGlutenFree, SugarFree, setSugarFree}) => {
    return (
    <div className="fourthSpecials">
        <legend> Any special requests to keep in mind for your future orders or offers?</legend>
        <label className="Label">
            <input
                type="checkbox"
                checked={GlutenFree}
                value={GlutenFree}
                id={SugarFree}
                onChange={event => setGlutenFree (event.target.checked)}
            /> <h5>Gluten Free </h5>
            <input
                type="checkbox"
                checked={SugarFree}
                value={SugarFree}
                id={SugarFree}
                onChange={event => setSugarFree (event.target.checked)}
            /> <h5>Sugar Free </h5>
            
        </label>
        <div className="nextButton">
            <button className="OrderBtn btn" ><a href="#Submit">Submit</a></button>
        </div>
    </div>  
    )
}




