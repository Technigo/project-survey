import React from 'react'

const Email = ({ email, setEmail}) => {

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    return (

        <div className='questionContainer one'>
            <div className='innerContainer'>
            <label htmlFor='email'>

                <h2 className='questionTitle'><i className="fas fa-arrow-circle-right"></i> Please type your email adress so we'll know how to contact you!</h2>

                <input
                className='textInput'
                id='email'
                type='text'
                onChange={onEmailChange}
                value={email}
                /* required */
                />

            </label>

            <button className='okButton'><a href='#workArea' className='okButtonLink'>OK</a></button>
            </div>
        </div>
    )
} 

export default Email;