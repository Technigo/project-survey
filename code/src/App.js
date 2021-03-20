import React, { useState } from 'react'
import Survey from './components/Survey'
import Summary from './components/Summary'
import Start from './components/Start'

const App = () => {
  //SET Q STEP
  const [step, setStep] = useState(0)

  //COMPONENTS STATES
  const [formData, setFormData] = useState({
    name: 1,
    animal: 2,
    accessory: 3,
    activity: 4,
    ratherNot: 5
  })

  const handleInputChange = (name, value) => {
    const newFormData = { ...formData }
    newFormData[name] = value
    setFormData(newFormData)
  }
  
  return (
    <section className="form-section">
      
      {step === 0 && (
        <Start
          step={step}
          setStep={setStep}
        />
      )}
        
      {step > 0 && step < 6 && (  
        <Survey
          step={step}
          setStep={setStep}
          name={formData.name}
          animal={formData.animal}
          accessory={formData.accessory}
          activity={formData.activity}
          ratherNot={formData.ratherNot}
          handleInputChange={handleInputChange}
        />
      )}

      {step === 6 && (
        <Summary 
          step={step}
          setStep={setStep}
          name={formData.name} 
          animal={formData.animal} 
          accessory={formData.accessory}
          activity={formData.activity}
          ratherNot={formData.ratherNot}
        />
      )}
    </section>
  )  
}

export default App

