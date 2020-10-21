import React from "react";

export const Summary = ({ consumption, numberOfBooks, favouriteAuthor, onRestart}) => {
    return (
        <>
            <p>Wow! You read {numberOfBooks} books each year!</p>
            <p>{consumption} is awesome.</p>
            <p>{favouriteAuthor} is a good choice.</p>
            <button
                onClick={onRestart}>
                    Start again
            </button>
        </>
    )
}