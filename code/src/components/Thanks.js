import React from 'react'



const Thanks = ({name, onNameChange, onStepChange}) => {
    
    return (
        <section className="question-container">
            <label htmlFor='thanks'>
                <div className='thanks-heading'>
                    <h1>Thank you!</h1> 
                </div>
                <div className='thanks-container'>
                    <h3>We really appreciate you taking time to help us get even better</h3>
                </div>
                <div className='thanks-end'>
                    <h2>Have a great day!</h2>
                </div>
                <h4>/The event-team</h4>
            </label> 
            
        </section>
    )
}

export default Thanks