import React from 'react'; 

const Summary = (props) => {
    const { name, numberOfPlants, favoritePlant } = props;

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