import React from 'react';

import { Button } from './Button';

export const Welcome = () => {
    return (
        <div className="welcome-container">
            <h1>Hello!</h1>
            <h3>So you stayed with us recently and we would love it if you could just answer a few quick questions!</h3>
            <i className="fas fa-umbrella-beach"></i>
            <Button 
            button="lets start!" />
        </div>
    )
}