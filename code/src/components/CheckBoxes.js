import React from "react";

const CheckBoxes = (props) => {
    const {nextQuestion, setPersonality, personality, setPerson, person } = props
        return (
            <section className='wrap'>
                <div className='content-wrap checkbox'>
                    <h1>Check yourself!</h1>
                    <p>What personality applies to you?</p>
                    <form className="form-checkbox">
                        <label htmlFor='personality'>
                            fearless
                            <input
                                className='input-class'
                                type='checkbox'
                                checked={personality}
                                onChange={setPersonality}
                                id='personality'
                                name='personality'
                            />
                        </label>
                        <label htmlFor='person'>
                            judgemental
                            <input
                                className='input-class'
                                type='checkbox'
                                checked={person}
                                onChange={setPerson}
                                id='person'
                                name='person'
                            />
                        </label>
                    </form>  
                    <button className='btn' onClick={nextQuestion}>Go to next question</button>
                </div>
            </section>
        )
}

export default CheckBoxes; 

