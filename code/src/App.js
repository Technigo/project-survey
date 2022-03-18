import React, {useState} from 'react'

import { NameInput } from 'components/NameInput'
import { Counter } from 'components/Counter'



export const App = () => {

  const [step, setStep] = useState(1)
  const [nameInput, setNameInput] = useState('')
  const [counter, setCounter] = useState(0)

  // const counterDefault = () => {
  //   return counter
  // }

  const counterIncrease = () => {
    setCounter(counter + 1)
  }

  const counterDecrease = () => {
    setCounter(counter - 1)
  }

  const nameUpdateInput = (event) => {
    setNameInput(event.target.value)
}

  const stepChanger = () => {
    setStep(step +1)
  }

  
  if (step === 1) {
  return (
    <div> 
      <Counter 
      props={counter}
      counterIncrease={counterIncrease}
      counterDecrease={counterDecrease}
      stepChange={stepChanger}
      />

    </div>
  )}

  else if (step === 2){
    return (
     <div>
      <NameInput 
      nameInput={nameInput} 
      nameUpdateInput={nameUpdateInput} 
      stepChange={stepChanger}/>
      </div>

    
    )
  }

  else if (step === 3){
    return (
      <div>
      <h2>Step 3!</h2>
      <button onClick={() => setStep (step +1)}>Next question</button>
      </div>
    )
  }


}
