import React from 'react'

const welcomePage = ({nextQuestion, onNameChange, username }) => {
    return (
        <section className='wrap'>
            <div className='content-wrap welcome'>
                <h1>It's survey time!</h1>
                <p>This is a survey with random questions. Let's start with typing your name in the field.</p>
                <form 
                    onSubmit={event => event.preventDefault()}>
                    <label htmlFor='name'>Name
                        <input
                            className='input-class'
                            type='text'
                            onChange={onNameChange}
                            value={username}
                            id='name'
                            name='name'
                        />
                    </label>
                </form>
                <button 
                    className='btn' 
                    type='button' 
                    disabled={username === ""} 
                    onClick={nextQuestion}>Start survey
                </button>
            </div>
        </section>
    )
}

export default welcomePage;
