import React, {useState} from 'react'

import { NameInput } from 'components/NameInput'
import { Counter } from 'components/Counter'
import HaveYouWatched from 'components/HaveYouWatched'
import Summary from 'components/Summary'
import WhatShip from 'components/WhatShip'


const Form = () => {

  const [step, setStep] = useState(0)
  const [watchedStatus, setWatchedStatus] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [counter, setCounter] = useState(0)
  const [whatTeam, setShip] = useState('')


  

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

  const onWatchedChange = (status) => {
      setWatchedStatus(status)
  }

  const teamUpdate = (dude) => {
    setShip(dude)
}


  return (
      <div>
            { step === 0 && 
            <HaveYouWatched 
            watchedStatus = {watchedStatus}
            onWatchedChange = {onWatchedChange}
            stepChange={stepChanger}
            />

            }

          { step === 1 && <Counter 
            props={counter}
            counterIncrease={counterIncrease}
            counterDecrease={counterDecrease}
            stepChange={stepChanger} /> }

          { step === 2 && <NameInput 
            nameInput={nameInput} 
            nameUpdateInput={nameUpdateInput} 
            stepChange={stepChanger} /> }

          { step === 3 && <div>
            <h2>Step 3!</h2>
            <button onClick={() => setStep (step +1)}>Let me finish already?</button>
            </div> }

        { step === 4 && <div>
            <WhatShip 
            whatTeam = {whatTeam}
            teamUpdate = {teamUpdate}
            stepChange={stepChanger}
            />
        
        </div> }


          { step == 5 && 
            <div>
            <Summary nameInput={nameInput} counter={counter} watchedStatus={watchedStatus} whatTeam = {whatTeam} />
            </div> }  

      </div>
  )





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
      <button onClick={() => setStep (step +1)}>Let me finish already?</button>
      </div>
    )
  }

  else if (step === 4){
    return (
      <div>
      <h2>Results:</h2>
      <p>Counter: {counter} </p>
      <p>Name: {nameInput}</p>

      </div>
    )
  }

}
export default Form