import React, {useState} from 'react'
import './DropDown.css'

const DropDown = () =>{
    const [snack, setSnack] = useState("");

    const onOptionChange = (e) =>{
        setSnack(e.target.value)
    }
    return(
        <>
            <h2>What is your favorite snack?</h2>
            <form onSubmit={event => event.preventDefault()}>
                <select
                // onChange={event => setSnack(event.target.value) }
                onChange={onOptionChange}
                value={snack}
                >
                    <option value="">Select snack</option>
                    <option value="popcorn">Popcorn</option>
                    <option value="chips">Chips</option>
                    <option value="choclate">Choclate</option>
                    <option value="candy">Mixed candy</option>
                    <option value="ice-cream">Ice cream</option>
                </select>
            </form>
            <p>you live in {snack}</p>
        </>
    )
}

export default DropDown