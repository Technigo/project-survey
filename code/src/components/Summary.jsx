import React from 'react';

const Summary = ({
    experienceChoice,
    chosenDay,
    bestChosen
}) => {
    let dayString = chosenDay === "one" ? chosenDay + ' day' : chosenDay + ' days';
    return (
        <section className='question-wrapper'>
            <div className='question'>
                <h2>Summary for your choices</h2>
                <p>You have worked from {experienceChoice} earlier</p>
                <p>You would like to work from the office {dayString} a week</p>
                <p>The best thing with working from home/remotely is: {bestChosen}</p>
            </div>
        </section>
    )
}
export default Summary;