import React, {useState} from 'react'

const Amount = ({choosedAmount, IselectAmount}) => {

    return (
        <div className="amount-container">
            <label className="amount-items">
                <p>Please select how many items</p>
                <input 
                type="number" 
                name="Amount of Items" 
                value={choosedAmount}
                onChange={e => IselectAmount(e)}
                placeholder="# of items" required />
            </label>
        </div>
    )
}

export default Amount