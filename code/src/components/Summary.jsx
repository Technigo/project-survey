import React from 'react';

export const Summary = ({ summary }) => {
    console.log(summary);
    return (
        <>
            <div className="summary">
                <p>Your name is {summary.name}</p>
            </div>
        </>
    )
}