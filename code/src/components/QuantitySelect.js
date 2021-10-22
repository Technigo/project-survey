import React from 'react'

import Button from './Button'

const QuantitySelect = ({ quantity, onQuantityChange }) => {

    const amount = ["1-5", "5-10", "10-15", "more than 15"]
    return (
        <>
            <label htmlFor="plantsqty" className="label-title"> How many plants do you have at home? </label>
            <div>
                <select
                    name="plants"
                    id="plantsqty"
                    className="select-qty"
                    value={quantity}
                    aria-label="Navigate with arrows and then press Enter"
                    onChange={onQuantityChange}
                    required>
                    <option className="option" value="">Select amount:</option>
                    {amount.map((qty) => {
                        return (
                            <option className="option" key={qty}
                                value={qty}>{qty} plants</option>
                        )
                    })}
                </select>
            </div>
            <Button button="NEXT" />
        </>
    )
}

export default QuantitySelect