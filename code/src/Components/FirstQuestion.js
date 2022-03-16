import React from 'react';

const FirstQuestion = ({destinationInput, onDestinationInputChange, nextQuestion, step}) => {

    return (
 <main className='main-container'> 
        <form className='form-container'>
            <p>Question number : {step} </p>

            <label className='question-title'>
                <h3>Which one of this three options do you prefer?</h3>
            </label>
      <select className='option'
        onChange={onDestinationInputChange}
        value={destinationInput}>
        <option disabled value="">Select destination</option>
        <option value="charter">Charter trip</option>
        <option value="city">City trip</option>
        <option value="hiking">Hiking trip</option>
      </select>
      <button className='next-btn' onClick={nextQuestion}>Next</button>
    </form>
        </main>
    );
};

export default FirstQuestion;


