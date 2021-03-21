import React from 'react'

const Email = ({ email, setEmail }) => {

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    return (

        <div className='questionContainer one' id='email'>
            <div className='innerContainer'>

                <h2 className='questionTitle'><i className="fas fa-arrow-circle-right"></i> Please add your email adress so that we have a way to contact you!</h2>
                
                <label htmlFor='email'>
                <input
                className='emailInput'
                id='email'
                type='email'
                onChange={onEmailChange}
                value={email}
                placeholder='name@email.com'
                />
                </label>

                <button
                className='okButton'
                type='button'
                onClick={(e) =>{
                    e.preventDefault();
                    window.location.href='#workArea'
                }}>OK</button>

            </div>
        </div>
    )
} 

export default Email