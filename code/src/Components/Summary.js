import React from 'react'; 

/* Sending in name, numberOfPlants and favoritePlant as props in summary */
const Summary = ({ name, numberOfPlants, favoritePlant }) => {

    return (
        <>
        <section>
            <h1>Thank you for answering {name}!</h1>
            <p>Wow! You have {numberOfPlants} plants at your home. </p>
            <p>Your favorite plant is: {favoritePlant}</p>
        </section>
        <section className="reset-button" tabIndex="0">
        <button tabIndex="0" type="button" onClick={() => window.location.reload()}>Reset</button>
        </section>
        </>

    );
};

export default Summary