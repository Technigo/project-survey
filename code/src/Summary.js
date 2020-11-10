import React from 'react';

export const Summary = ({ name, location, ageGroup }) => {

    return (
        <>
            <section className="summary">
                <h1 className="typewriter">My pleasure!</h1>

                <div className="summary-text">

                    <p className="summary-text">Dear {name}, I'm truly looking forward to connect with you. Let's meet somewhere in {location} soon. Psst, you have never looked so good, even though your only between {ageGroup} years old!</p>

                    <button
                        type="button"
                        onClick={() => window.location.reload()}
                        tabIndex="0">
                        Restart
                    </button>
                </div>
            </section>
        </>
    );
};
