import React from 'react'

const Email = () => {
    return (
        <div className="email-container">
            <label className="email">
            <p id="email">E-mail</p>
            <input type="email" name="email" required placeholder="example@example.com"/>
            </label>
        </div>
    )
}

export default Email