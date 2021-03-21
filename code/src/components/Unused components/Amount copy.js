import React, {useState} from 'react'

const Amount = () => {
    const [myamount, setmyamount] = useState("");
    console.log(myamount)

    return (
        <div className="amount-container">
            <label className="amount-items">
            <p>Please select how many items</p>
            <input 
            type="number" 
            name="Amount of Items" 
            value={myamount}
            onChange={event => setmyamount(event.target.value)}
            placeholder="# of items" required />
            </label>
        </div>
    )
}

export default Amount