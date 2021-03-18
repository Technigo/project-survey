import React from 'react'

const Phone = () => {
    return (
        <div className="phone-container">
            <label className="phone">
            <p>Phone number</p>
            <input type="number" name="Phone Number" placeholder="07X-XXX XX XX" required />
            </label>
        </div>
    )
}

export default Phone