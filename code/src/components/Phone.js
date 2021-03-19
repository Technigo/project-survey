import React, {useState} from 'react'

const Phone = ({phoneInput, IselectPhone}) => {
    //const [myphone, setmyphone] = useState("");
    //console.log(myphone)

    return (
        <div className="phone-container">
            <label className="phone">
            <p>Phone number</p>
            <input 
            type="number" 
            name="Phone Number" 
            value={phoneInput}
            onChange={e => IselectPhone(e)}
            placeholder="07X-XXX XX XX" required />
            </label>
        </div>
    )
}

export default Phone