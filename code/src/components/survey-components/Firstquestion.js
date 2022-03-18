import React from 'react'

const Firstquestion = (props) => {

  return (
      <section className='question-section'>
       <label htmlFor='name'>Enter your name: </label>
        <input
           id='name'
           type='text'
           value={props.name}
           onChange={(e) => props.setName(e.target.value)}
        />
    </section>
  )
}

export default Firstquestion

