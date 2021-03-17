import React from 'react'

const Amount = () => {
    return (
        <label className="amount-items">
                    <p>Please select how many items</p>
                    <input type="number" name="Amount of Items" placeholder="# of items" required />
                </label>
    )
}

export default Amount