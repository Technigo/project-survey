import React from 'react';

const Summary = (props) => {
    const {name, numberOfSeasons, gameOfThronesHouse, rateEnding} = props;
    return (
        <>
        <section>
            <h2>Here are your answers:</h2>
            <p>{name}</p>
            <p>{numberOfSeasons}</p>
            <p>{gameOfThronesHouse}</p>
            <p>{rateEnding}</p>
            <p>Thank you for participating in our Survey!</p>
        </section>
        </>
    );
}

export default Summary;