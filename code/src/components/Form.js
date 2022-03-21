import React, {useState} from 'react'

import { NameInput } from 'components/NameInput'
import { Counter } from 'components/Counter'
import { Welcome } from 'components/Welcome'


import HaveYouWatched from 'components/HaveYouWatched'
import Summary from 'components/Summary'
import WhatShip from 'components/WhatShip'


const Form = () => {

  const [step, setStep] = useState(3)
  const [watchedStatus, setWatchedStatus] = useState('')
  const [nameInput, setNameInput] = useState('Dorothea')
  const [whatTeam, setShip] = useState('')

  const [value, setValue] = useState("50")


  const valueUpdateInput = (event) => {
    setValue(event.target.value)
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


document.addEventListener('click', e => {
  if (e.keyCode === '13' && step < 6) {
    setStep(step +1);
  } else if (e.keyCode === '37' && step > 1) {
    setStep(step -1);
  
  }
})



      


  return (

    
      <div>


            { step === 1 && <Welcome             
            stepChange={stepChanger}
             />}

            { step === 2 && <NameInput 
            nameInput={nameInput} 
            nameUpdateInput={nameUpdateInput} 
            stepChange={stepChanger} /> }

            { step === 3 && <HaveYouWatched 
            watchedStatus = {watchedStatus}
            onWatchedChange = {onWatchedChange}
            stepChange={stepChanger}
            /> 
            }


            { step === 4 && <Counter 
            value={value}
            valueUpdateInput={valueUpdateInput}
            stepChange={stepChanger} /> }

        
          { step === 5 && <WhatShip 
              whatTeam = {whatTeam}
              teamUpdate = {teamUpdate}
              stepChange={stepChanger}
              />
          }


          { step === 6 && <div> <Summary 
            nameInput={nameInput} 
            value={value} 
            watchedStatus={watchedStatus} 
            whatTeam = {whatTeam} />
            </div> }  

      </div>
  )



}
export default Form