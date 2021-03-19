import React, {useState} from 'react'

const Email = ({emailInput, IselectEmail}) => {
    //const [myemail, setmyemail] = useState("");
    //console.log(myemail)

    return (
        <div className="email-container">
            <label className="email">
            <p id="email">E-mail</p>
            <input 
            type="email" 
            name="email"
            onChange={e => IselectEmail(e)} //Skriv istället onChange={setSize}
            value={emailInput}
            placeholder="example@example.com" required />
            </label>
        </div>
    )
}

export default Email