import React from 'react'

export const DropdownSnacks = ({snack, setSnack}) => {

    return ( 

            <form>
                <h2>Snacks!</h2>
                <select 
                onChange={event => setSnack(event.target.value)}
                value={snack}
                required
                >
                <option value="">Select your favourite food!</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Asian">Asian</option>
                <option value="Vegetarian">Vegetarian</option>
                </select>
            </form>

        )}