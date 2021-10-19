import React from 'react'

import Button from './Button'

const QuantitySelect = ({ quantity, onQuantityChange }) => {

    const amount = ["0-5", "5-10", "10-15", "more than 15"]
    return (
        <>
            <label htmlFor="plantsqty"> How many plants do you have at home? </label>
            <select
                name="plants"
                id="plantsqty"
                value={quantity}
                onChange={onQuantityChange}
                required>
                <option value="">Select amount:</option>
                {amount.map((qty) => {
                    return (
                        <option key={qty}
                            value={qty}>{qty}</option>
                    )
                })}
            </select>
            <Button button="CONTINUE" />
        </>
    )
}

export default QuantitySelect