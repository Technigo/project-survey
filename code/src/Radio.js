import React from 'react'

export const Radio = ( {handleFormInput} ) => {
return <div> 

        <input type="radio" value="Maveric" name="callsign" onChange={e => handleFormInput(e.target.value)}/> Maverick
        <input type="radio" value="Goose" name="callsign" onChange={e => handleFormInput(e.target.value)}/> Goose
        <input type="radio" value="Sundown" name="callsign" onChange={e => handleFormInput(e.target.value)}/> Sundown  

</div>
}