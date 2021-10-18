import React, { useState } from 'react'

export const App = () => {
  /* const [counter, setCounter] = useState(0) AAAAAAA*/

  const [nameInput, setNameInput] = useState('name')
  const [surnameInput, setSurnameInput] = useState('surname')
  const [step, setStep] = useState(1)
  

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }
  const onSurnameInputChange = (event) => {
    setSurnameInput(event.target.value)
  }

  if (step === 1){
    return (
      <div>
        <form>
          <label htmlFor="nameInput">Type your name</label>
          <input 
            id="nameInput" 
            type="text" 
            value={nameInput} 
            /* onChange={(event) => setNameInput(event.target.value)}/> */
            onChange={onNameInputChange}
            />
        </form>
        <button onClick={() => setStep(step +1)}>Next Question</button>
      </div>
    )
  } else if (step === 2){
    return (
      <div>
        <form>
        <label htmlFor="surnameInput">Type your name</label>
        <input 
          id="surnameInput" 
          type="text" 
          value={surnameInput} 
          onChange={onSurnameInputChange}
          />
        </form>
        <button onClick={() => setStep(step +1)}>See overview</button>
      </div>
    )
  } else if (step === 3){
    return (
      <section>
      <h2>My values from form:</h2>
      <p>Name: {nameInput}</p>
      <p>Surname: {surnameInput}</p>
    </section>
    )
  }





  return (
/*     <div>
      <div>My counter is: {counter}</div>
      <button onClick={() => setCounter(counter+1)}>Click</button>
      <button onClick={() => setCounter(counter+10)}>Big Click</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div> AAAAAAA*/

    <div>
      <form>
        <label htmlFor="nameInput">Type your name</label>
        <input 
          id="nameInput" 
          type="text" 
          value={nameInput} 
          /* onChange={(event) => setNameInput(event.target.value)}/> */
          onChange={onNameInputChange}
          />

        <label htmlFor="surnameInput">Type your name</label>
        <input 
          id="surnameInput" 
          type="text" 
          value={surnameInput} 
          onChange={onSurnameInputChange}
          />
      </form>
      
      <section>
        <h2>My values from form:</h2>
        <p>Name: {nameInput}</p>
        <p>Surname: {surnameInput}</p>
      </section>
    </div>
  )
}
