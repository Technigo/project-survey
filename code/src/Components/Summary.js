import React from 'react'

const Welcome = ({ username }) => {
    return (
        <h2 className="summary">
            {username}, this is your answers:
        </h2>
    );
};

export default Welcome;