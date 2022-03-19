import React from 'react'

const ageGroups = ['6-18', '19-30', '31+']

const RadioButton = ({ nextQuestion, onRadioChange, age }) => {
    return (
       <section className='wrap'>
           <div className='content-wrap radio-background'>
                <h1>Somewhere between...</h1>
                <p>At what age did you understand that you are an adult now and need to take responsibilities for your actions?</p>
                <form className='radiobutton-form'>
                    Age Group:
                    {ageGroups.map(group => (
                        <label key={group} htmlFor='radio'>
                            <input
                                className='radio-style'
                                type='radio'
                                value={group}
                                onChange={onRadioChange}
                                checked={age === group}
                                id='radio'
                                name='radio'
                            />
                            {group}
                        </label>
                    ))} 
                    <button className='btn submit-btn' disabled={age === ""} type='submit' onClick={nextQuestion}>Submit answers</button>
                </form>
            </div>
       </section>
    )
}

export default RadioButton;


/* <button className='btn' disabled={age === ""} onClick={nextQuestion}>See summary</button> */
