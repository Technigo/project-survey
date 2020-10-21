import React from 'react';

const EmailField = ({email, setEmail}) => {
    

        return (
            <>
            <label>E-mail</label>
            <input
                type="email"
                onChange={event => setEmail(event.target.value)}
                value={email}
                placeholder="email"
            />
            </>
        )
    }

export default EmailField;