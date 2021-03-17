import React from 'react'

const Email = () => {
    return (
        <div className="email-container">
            <label className="email">
            <p>E-mail</p>
            <input type="email" name="email" required placeholder="example@example.com"/>
            </label>
        </div>
    )
}

export default Email