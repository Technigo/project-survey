import React from 'react';

const FirstQuestion = ({destinationInput, onDestinationInputChange, nextQuestion, step}) => {

    return (
 <main className='main-container'> 
        <form className='form-container'>
            <p>Question number : {step} </p>

            <label className='question-title'>
                <h3>Which one of this three kind of vacation do you prefer?</h3>
            </label>
      <select className='option'
        onChange={onDestinationInputChange}
        value={destinationInput}>
        <option disabled value="">Select destination</option>
        <option value="charter">Going somewere warm</option>
        <option value="city">Going out into the wild</option>
        <option value="hiking">Going skiing</option>
      </select>
      <button className='next-btn' onClick={nextQuestion}>Next</button>
    </form>
        </main>
    );
};

export default FirstQuestion;


