import React from "react";

const CheckBox = (props) => {
    const {nextQuestion, setPersonality, personality, setPerson, person } = props
        return (
            <section className='wrap'>
                <div className='content-wrap checkbox'>
                    <h1>Check yourself!</h1>
                    <p>What personality applies to you?</p>
                    <form className="form-checkbox">
                        <label htmlFor='personality'>
                            <input
                                className='input-space'
                                type='checkbox'
                                checked={personality}
                                onChange={setPersonality}
                                id='personality'
                                name='personality'
                            />
                            fearless
                        </label>
                        <label htmlFor='person'>
                            <input
                                className='input-space'
                                type='checkbox'
                                checked={person}
                                onChange={setPerson}
                                id='person'
                                name='person'
                            />
                            judgemental
                        </label>
                    </form>  
                    <button className='btn' onClick={nextQuestion}>Next question</button>
                </div>
            </section>
        )
}

export default CheckBox; 

