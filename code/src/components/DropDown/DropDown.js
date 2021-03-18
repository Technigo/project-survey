import React from 'react'
import './DropDown.css'

const DropDown = ({snack, setSnack}) =>{
    const onOptionChange = (e) =>{
        setSnack(e.target.value)
    }
    return(
        <>
            <h2 className="snack-header">What is your favorite snack?</h2>
                <select className="select-snack"
                onChange={onOptionChange}
                value={snack}
                >
                    <option disabled value="">Select snack</option>
                    <option value="popcorn">Popcorn</option>
                    <option value="chips">Chips</option>
                    <option value="choclate">Choclate</option>
                    <option value="candy">Mixed candy</option>
                    <option value="ice-cream">Ice cream</option>
                </select>
        </>
    )
}

export default DropDown