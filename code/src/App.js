import React, { useState } from 'react'
import NameInput from './components/NameInput'
import Temperature from './components/Temperature'
import Dropdown from './components/Dropdown'
import Buttons from './components/Buttons'
import Summary from './components/Summary'

export const App = () => {
  //SET Q STEP
  const [step, setStep] = useState(1)
  

  //COMPONENTS STATES
  const [name, setName] = useState('') 
  const [temperature, setTemperature] = useState ('')
  const [color, setColor] = useState("pink")
  
  return (
    <section className="form-section">
      <form>
        {step === 1 && (
            <NameInput name={name} setName={setName} />
        )}

        {step === 2 && (
            <Temperature temperature={temperature} setTemperature={setTemperature} />
        )}

        {step === 3 && (
            <Dropdown color={color} setColor={setColor} />
        )}
        
          <Buttons step={step} setStep={setStep} />
      </form>

      {step === 4 && (
            <Summary name={name} temperature={temperature} color={color} />
        )}
    </section>
  )  
}
