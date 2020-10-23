import React from 'react';

const EmailField = ({email, setEmail}) => {
    

        return (
            <>
                <label htmlFor="email">E-mail</label>
                <input
                    id="email"
                    type="email"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    placeholder="E-mail"
                />
            </>
        )
    }

export default EmailField;