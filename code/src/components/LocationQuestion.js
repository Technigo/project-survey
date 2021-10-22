import React from 'react'

const LocationQuestion = ({locationInput, onLocationInputChange, onstepChange, onStepMinusChange}) => {

    return (
        <div className = "container-bella">
            <img src = "/assets/bella.jpg" alt = "child who asked the question"></img>
            <fieldset className = "fieldset">
            <legend className = "legend" >Questions by Bella + Bubbles</legend>
                <form className = "form-container">
                    <label className = "label" htmlFor = "locationInput">Where do you live?</label>
                    <input 
                        className = "input"
                        id = "locationInput"
                        type = "text" 
                        value = {locationInput} 
                        onChange = {onLocationInputChange}
                    />
                    <button className = "button" onClick = {onstepChange}>Next Question</button>
                    <button className = "button" onClick = {onStepMinusChange}> Previous Question</button>
                </form>
            </fieldset>
       
        </div>
        
    )
}
export default LocationQuestion