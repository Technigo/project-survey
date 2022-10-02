import React from "react";

export const FirstQuestion = ({ setTrip, increase, decrease }) => {

    return (
        <div className="container">
            <h1>Wich travel did you do with our company?</h1>
            <div className="selector">
                <from className="trips">
                   <select onChange={(event) => setTrip(event.target.value)}>
                    <option value=""  disabled selected>Choose your trip</option>
                    <option value="International Space Station">International Space Station</option>
                    <option value="Moon">Moon</option>
                    <option value="Mars">Mars</option>
                   </select>
                </from>
            </div>
         <div className="buttons">
          <button onClick={decrease}>Back</button>
          <button onClick={increase}>Next</button>
         </div>
        </div>
    )
}