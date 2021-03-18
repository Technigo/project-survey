import React from 'react';

const Summary = ({name, numberOfSeasons, gameOfThronesHouse, rateEnding}) => {

    const backToStart = () => {
        document.location.reload()
      };

    return (
        <>
        <section>
            <h2 className="summary-heading">Summary</h2>
            <p className="summary-text-question">Who is your favorite Game of Thrones character?:</p>
            <p className="summary-text-answer">Answer: {name}</p>
            <p className="summary-text-question">How many seasons did you watch?:</p>
            <p className="summary-text-answer">Answer: {numberOfSeasons}</p>
            <p className="summary-text-question">There are nine Great Houses in Westeros. Which one is your favorite?:</p>
            <p className="summary-text-answer">Answer: {gameOfThronesHouse}</p>
            <p className="summary-text-question">What did you think about the final episode?:</p>
            <p className="summary-text-answer">Answer: {rateEnding}</p>
            <p className="summary-text-question">Thank you for your participation!</p>
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