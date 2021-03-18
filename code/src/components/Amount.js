import React from 'react'

const Amount = () => {
    return (
        <div className="amount-container">
            <label className="amount-items">
            <p>Please select how many items</p>
            <input type="number" name="Amount of Items" placeholder="# of items" required />
            </label>
        </div>
    )
}

export default Amount