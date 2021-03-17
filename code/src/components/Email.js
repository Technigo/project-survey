import React from 'react'

const Email = () => {
    return (
        <label className="email">
            <p>E-mail</p>
            <input type="email" name="email" required />
        </label>
    )
}

export default Email