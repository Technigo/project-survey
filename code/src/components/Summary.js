import React from 'react';

const Summary = (props) => {
    const {name, numberOfSeasons, gameOfThronesHouse, rateEnding} = props;

    const backToStart = () => {
        document.location.href = "";
      };

    return (
        <>
        <section>
            <h2 className="summary-heading">Here are your answers:</h2>
            <p>{name}</p>
            <p>{numberOfSeasons}</p>
            <p>{gameOfThronesHouse}</p>
            <p>{rateEnding}</p>
            <p>Thank you for participating in our Survey!</p>
            <button className="button"
                type='button'
                tabIndex ='0'
                aria-label='Back to homepage'
                onClick ={backToStart}>
                    Back to homepage
            </button>
        </section>
        </>
    );
}

export default Summary;