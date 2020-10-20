import React, { useState } from 'react';

export const EmailQuestion = () => {
    const [email, setEmail] = useState()
    return (
        <form className="email-question">
            <p>e-Mail:</p>
            <input
                type="email"
                onChange={event => setEmail(event.target.value)}
                value={email}
                required
            />
        </form>
    );
};