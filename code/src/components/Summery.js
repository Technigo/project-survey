import React from 'react'

const Summery = ({nameInput, surnameInput, selectOption, radioInput}) => {
    return (
    <section>
      <h2>My values from form:</h2>
      <p>Your name is: {nameInput}</p>
      <p>Ofcourse you like: {surnameInput}</p>
      <p>Your favourite song: {selectOption}</p>
      <p>Option of your taste: {radioInput}</p>
      <button onClick={() => window.location.reload(false)} className="btn">Let' start over! <span role="img" aria-label="handpointer">👋🏼</span></button>
    </section>
    )

}

export default Summery
