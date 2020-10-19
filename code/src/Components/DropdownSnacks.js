import React from 'react'

export const DropdownSnacks = ({snack, setSnack}) => {

    return ( 
        <form>
            <select 
            onChange={event => setSnack(event.target.value)}
            value={snack}
            >
            <option value="">Select your favourite food!</option>
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
            <option value="asian">Asian</option>
            <option value="vegetarian">Vegetarian</option>
            </select>

        </form>

        )}