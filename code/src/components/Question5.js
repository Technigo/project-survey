import React from "react";

const Question5 = ({ movieInput, onMovieInputChange, onStepChange }) => {

    return (
        <form>
            <label htmlFor="movieInput">Favorite Christmas(ish) movie?</label>
            <input id="movieInput" type="text" value={movieInput} onChange={onMovieInputChange} />

            <button onClick={onStepChange}>Next</button>
        </form>
    );
};

export default Question5;