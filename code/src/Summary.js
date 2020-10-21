import React, {useState} from 'react'

export const Summary = () => {
    const [summary, setSummary] = useState(false);

    return (
        <>
            <h2>Your response:</h2>
            <p></p>
        </>
    );
};