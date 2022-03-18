import React from 'react'

const Fourthquestion = (props) => {

  return (
    <section className='question-section'>
       <label htmlFor='email'>Enter email:</label>
        <input
           id='email'
           type='email'
           value={props.email}
           onChange={(e) => props.setEmail(e.target.value)}
        />
    </section>
  )
}

export default Fourthquestion