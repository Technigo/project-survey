import React from 'react';

const Summary = ({name, numberOfSeasons, gameOfThronesHouse, rateEnding}) => {

    const backToStart = () => {
        document.location.reload()
      };

    return (
        <>
        <section>
            <h2 className='summary-heading'>Summary</h2>
            <p className='summary-text-question'>Favorite character:</p>
            <p className='summary-text-answer'>Answer: {name}</p>
            <p className='summary-text-question'>Number of seasons:</p>
            <p className='summary-text-answer'>Answer: {numberOfSeasons}</p>
            <p className='summary-text-question'>Favorite House in Westeros:</p>
            <p className='summary-text-answer'>Answer: {gameOfThronesHouse}</p>
            <p className='summary-text-question'>Rating of final episode:</p>
            <p className='summary-text-answer'>Answer: {rateEnding}</p> 
            <button className='button'
                type='button'
                tabIndex ='0'
                aria-pressed='false'
                aria-label='Back to homepage'
                onClick ={backToStart}>
                    Back to homepage
            </button>
        </section>
        </>
    );
}

export default Summary;