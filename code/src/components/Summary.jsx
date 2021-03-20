import React from 'react';

export const Summary = ({ summary }) => {
    console.log(summary);
    return (
        <>
            <div className="form" tabIndex="0">
                <h4 tabIndex="0">Hey {summary.name}! 🤩</h4>
                <p tabIndex="0">You want to work in {summary.location}, great choice that's a beautiful place ☀️</p>
                <p tabIndex="0">{summary.radio} is a super interesting field of work, I'm sure you're gonna love it!</p>
                <p tabIndex="0">You prefer working with {summary.selectedStacks}, you're gonna be a dev ninja 🥷🏻</p>
            </div>
        </>
    )
}