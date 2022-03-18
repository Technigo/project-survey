import React from 'react';

export const Select = ({ newMovies, onChange}) => {
    return (
        <form className="section">
            <p>Which of these premieres are you looking forward to the most?</p>
            <select
                onChange={onChange}
                value={newMovies}
            >
                <option value="">Select here</option>
                <option value="Avatar 2">Avatar 2</option>
                <option value="Morbius"></option>
                <option value="Legally Blonde 3"></option>
                <option value="Jurassic World Domination"></option>
                <option value="I don't like movies"></option>
            </select>
        </form>
    );
};

export default Select
