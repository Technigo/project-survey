import React from "react"; 

/* Sending in name, numberOfPlants and favoritePlant as props in summary */
const Summary = ({ name, numberOfPlants, favoritePlant }) => {
    return (
        <>
            <section className="summary">
                <h2 className="summary-header">Thank you for answering {name}!</h2>
                <p className="summary-text">Wow! You have around {numberOfPlants} plants at your home. </p>
                <p className="summary-text">Your favorite plant is: {favoritePlant}.</p>
                <button className="reset-button" tabIndex="0" type="button" onClick={() => window.location.reload()}>Reset</button>
            </section>
        </>
    );
};

export default Summary;