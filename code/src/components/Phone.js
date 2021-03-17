import React from 'react'

const Phone = () => {
    return (
        <label className="phone">
            <p>Phone number</p>
            <input type="number" name="Phone Number" placeholder="07X-XXX XX XX" required />
        </label>
    )
}

export default Phone