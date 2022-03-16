import React from 'react'


const TheChoice = ({nextQuestion, step}) => {
    return(
        <main className='main-container choice'>
             <p>Question number: {step}</p>
            <h3 className='question-title'>What kind of vaction do you prefer?</h3>
            <form className='form-container'>
                  <button className='next-btn' onClick={nextQuestion}>Hot</button>
                  <button className='next-btn' onClick={nextQuestion}>Cold</button>
            </form>
        </main>
    )

}

export default TheChoice;