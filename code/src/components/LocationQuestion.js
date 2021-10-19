import React from 'react'

const LocationQuestion = ({locationInput, onLocationInputChange, onstepChange}) => {

    return (
        <form>
        <label htmlFor="locationInput">Where do you live?</label>
        <input 
            id="locationInput"
            type="text" 
            value={locationInput} 
            onChange={onLocationInputChange}
            /* ^ is another way of writing the following line: onChange={(event) => onNameInputChange(event)}*/
          />
        <button onClick = {onstepChange}>Next Question</button>
        </form>
    )
}
export default LocationQuestion