import React from 'react';


const Summary = ({ username, snacks, newMovies, intervalGroup, favouriteMovie }) => {
    return (
        <section className="summary section">
            <div className="section-child">
                <h2 className="summary">
                    {username}, this is your answers:
                </h2>
                <p>Your wisit us {intervalGroup}</p>
                <p>Your favourite movie in the world is: {favouriteMovie}</p>
                <p>The premiere your looking most forward to 2022 is: {newMovies}</p>
                <p>Your snack of choice is: {snacks}</p>
            </div>
        </section>
    );
};

export default Summary;