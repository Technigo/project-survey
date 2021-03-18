import React, { useState } from 'react'
import Survey from './components/Survey'
import Summary from './components/Summary'
import Start from './components/Start'

const App = () => {
  //SET Q STEP
  let [step, setStep] = useState(0)

  //COMPONENTS STATES
  const [name, setName] = useState('') 
  const [animal, setAnimal] = useState ('cat')
  const [accessory, setAccessory] = useState('necklaces')
  const [activity, setActivity] = useState ('do yoga')
  const [ratherNot, setRatherNot] = useState ('')

  return (
    <section className="form-section">
      
      <Start
        step={step}
        setStep={setStep}
      />
      
      <Survey
        step={step}
        setStep={setStep}
        name={name}
        setName={setName}
        animal={animal}
        setAnimal={setAnimal}
        accessory={accessory}
        setAccessory={setAccessory}
        activity={activity}
        setActivity={setActivity}
        ratherNot={ratherNot}
        setRatherNot={setRatherNot}
      />
      
      <Summary 
        step={step}
        setStep={setStep}
        name={name} 
        animal={animal} 
        accessory={accessory}
        activity={activity}
        ratherNot={ratherNot}
      />

    </section>
  )  
}

export default App

