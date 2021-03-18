import React, {useState} from 'react'

import FormSelect from './components/FormSelect'
import FormRadio from './components/FormRadio'
import FormName from './components/FormName'
import Summary from './components/Summary'

export const App = () => {

  const [name, setName] = useState('')
  const [fruit, setFruit] = useState('')
  const [howManyFruits, setHowManyFruits] = useState('')


  return (
    <div className='container'>
      <FormSelect 
        fruit={fruit}
        setFruit={setFruit}
      />

      <FormRadio 
        howManyFruits={howManyFruits}
        setHowManyFruits={setHowManyFruits}
      />

      <FormName 
        name={name}
        setName={setName}
      />


      <Summary 
        name={name}
        fruit={fruit}
        howManyFruits={howManyFruits}
      />

    </div>


  )
}
