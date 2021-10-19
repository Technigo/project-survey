import React from 'react'

const Summery = ({nameInput, surnameInput, selectOption, radioInput, onStepChange}) => {
    return (
    <section>
      <h2>My values from form:</h2>
      <p>Well hi there: {nameInput}</p>
      <p>Ofcourse you like: {surnameInput}</p>
      <p>Your favourite song: {selectOption}</p>
      <p>Option of your taste: {radioInput}</p>
      <button onClick={onStepChange} className="btn">Let' start over! <span role="img" aria-label="handpointer">👋🏼</span></button>
    </section>
    )

}

export default Summery

