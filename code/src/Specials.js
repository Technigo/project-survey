import React from "react"

export const Specials = ({GlutenFree, setGlutenFree, SugarFree, setSugarFree}) => {
    return (
    <div className="fourthSpecials">
        <legend> Any special requests to keep in mind for your future orders or offers?</legend>
        <label className="Label">
            <h5>Gluten Free </h5>
            <input className ="checkbox-input"
                type="checkbox"
                checked={GlutenFree}
                value={GlutenFree}
                id={GlutenFree}
                onChange={event => setGlutenFree (event.target.checked)}
            /> 
            <h5>Sugar Free </h5>
            <input className ="checkbox-input"
                type="checkbox"
                checked={SugarFree}
                value={SugarFree}
                id={SugarFree}
                onChange={event => setSugarFree (event.target.checked)}
            /> 
            
        </label>
    </div>  
    )
}




