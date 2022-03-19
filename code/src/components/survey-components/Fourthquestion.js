import React from 'react'

const Fourthquestion = (props) => {
  
  const handleEmail = (e) => {
    props.setEmail(e.target.value)
    props.setError('')
  }

  return (
    <section className='question-section'>
       <label htmlFor='email' tabIndex={0}>Enter email:</label>
        <input
           id='email'
           type='email'
           value={props.email}
           onChange={handleEmail}
           required
        />
    </section>
  )
}

export default Fourthquestion