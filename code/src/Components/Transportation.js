import React from 'react';

const transportPreference = [
        'train',
        'boat',
        'plane'
]


const Transportation= ({transportation, setTransportation, handleNextQuestionClick, handlePreviousQuestionClick, counter}) => {

    return (
    <> 
        <div className="questionWrapper">
                <p> How do you want to travel?</p>
        </div>

        <div className="transportationWrapper">
            {transportPreference.map(travel => (
            <section className="radio-lable" key={travel}>   
                <input
                className="radio-lable"
                type="radio"
                value={travel}
                onChange={event => setTransportation(event.target.value)}
                checked={transportation === travel}  
                />
                {travel}
            </section>
            ))}
        </div>

        <div className='buttonWrapper'>
            <button type="button" onClick={handlePreviousQuestionClick}> ◀︎ Back </button>
            <button type="button" onClick={handleNextQuestionClick}> Next ▶︎</button>
        </div>

        <div className='questionNumber'>
            <p>Question number</p> {counter} /5
        </div>
    </>
    );
}

export default Transportation;
