import React, {useState} from 'react'
import './DropDown.css'

const DropDown = () =>{
    const [location, setLocation] = useState("");
    return(
        <>
            <h2>Where do you live?</h2>
            <form onSubmit={event => event.preventDefault()}>
                <select
                onChange={event => setLocation(event.target.value) }
                value={location}
                >
                    <option value="">Select location</option>
                    <option value="stockholm">Stockholm</option>
                    <option value="barcelona">Barcelona</option>
                    <option value="oslo">Oslo</option>
                </select>
            </form>
            <p>you live in {location}</p>
        </>
    )
}

export default DropDown