import React from 'react';

export const Summary = ({ summary }) => {
    return (
        <>
            <div className="form summary" tabIndex="0">
                <h4 tabIndex="0">Hey {summary.name.toUpperCase()}! 🤩</h4>
                <p tabIndex="0">You're a youngster (only {summary.age}) at the peak of your life who wants to work in {summary.location.toUpperCase()}. Great choice, that's a beautiful place ☀️</p>
                <p tabIndex="0">{summary.radio.toUpperCase()} is a super interesting field of work, we're sure you're gonna love it!</p>
                <p tabIndex="0">You prefer working with {summary.selectedStacks.join(", ").toUpperCase()}, you're gonna be a dev ninja 🥷🏻</p>
            </div>
        </>
    )
}