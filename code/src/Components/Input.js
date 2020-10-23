import React from 'react'; 

const Input = (props) => {
    
    /* Sending in name and onInputChange as props */
    const { name, onInputChange } = props
    
    return (

        <section className='question1-wrapper'>
            <h2 className='form-header'>Please fill in the form:</h2>
            
            <h3 className="question-header">
                1. What's your name? 
                <span role="img" aria-label='cactus'> 🌵 </span> 
            </h3>
            
            <label htmlFor="name">Enter your name please: </label>
            <input 
            id='name'
            type='text'
            placeholder='My name is...'
            value={name}
            onChange={event => onInputChange(event.target.value)}
            required
            />
            
        </section>
            )
}

export default Input;