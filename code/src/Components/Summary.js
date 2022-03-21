import React from 'react';


const Summary = ({ username, snacks, newMovies, intervalGroup, favouriteMovie, onClickNext }) => {
    return (
        <section className="summary section">
            <div className="section-child">
                <div className="summary">
                    <h2 className="summary-title">
                        {username}, this is your answers:
                    </h2>
                    <p>Your visit us: {intervalGroup}</p>
                    <p>Your favourite movie in the world is: {favouriteMovie}</p>
                    <p>The premiere your looking most forward to 2022 is: {newMovies}</p>
                    <p>Your snack of choice is: {snacks}</p>
                </div>
                <button className="thank-you-btn" onClick={onClickNext}>Grab free popcorn</button>
            </div>
        </section>
    );
};

export default Summary;