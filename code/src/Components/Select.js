import React from 'react';


export const Select = ({ newMovies, onChangeMovie, onClickNext}) => {
    return (
        <section className="select section">
            <div className="section-child">
                <p>Which of these premieres are you looking forward to the most?</p>
                <select onChange={onChangeMovie} value={newMovies}>
                    <option value="">Select here</option>
                    <option value="Avatar 2">Avatar 2</option>
                    <option value="Morbius">Morbius</option>
                    <option value="Legally Blonde 3">Legally Blonde 3</option>
                    <option value="Jurassic World: Domination">Jurassic World: Domination</option>
                    <option value="I don't like movies">I don't like movies</option>
                </select>
                <button className="button" onClick={onClickNext}>Next</button>
            </div>
        </section>
    );
};

export default Select;
