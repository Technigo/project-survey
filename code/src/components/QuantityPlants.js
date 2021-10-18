import React from 'react'

const QuantityPlants = ({ quantity, onQuantityChange, onStepChange }) => {
    return (
        <>
            <label htmlFor="plantsqty"> How many plants do you have at home? </label>
            <select
                name="plants"
                id="plantsqty"
                value={quantity}
                onChange={onQuantityChange}>
                <option disabled value="">Select amount:</option>
                <option value="0-5">0-5</option>
                <option value="5-10">5-10</option>
                <option value="10-15">10-15</option>
                <option value="more than 15">more than 15</option>
            </select>
        </>
    )
}

export default QuantityPlants