import React, {useState} from 'react'

import Header from './components/Header'
import FormSelect from './components/FormSelect'
import FormRadio from './components/FormRadio'
import FormName from './components/FormName'
import SubmitButton from './components/SubmitButton'
import Summary from './components/Summary'


export const App = () => {

  const [name, setName] = useState('')
  const [fruit, setFruit] = useState('')
  const [howManyFruits, setHowManyFruits] = useState('')
  const [submit, setSubmit] = useState(false)


  return (
    <div className='wrapper'>

      {submit ? (
        <div className='summary'>
          <Summary 
            name={name}
            fruit={fruit}
            howManyFruits={howManyFruits}
          />
        </div>
      ) : (
      <div className='container'>    
        <div className='inner-container'>
          <Header />
          <FormSelect 
            fruit={fruit}
            setFruit={setFruit}
          />
        </div>
        <div className='inner-container'>
          <FormRadio 
            howManyFruits={howManyFruits}
            setHowManyFruits={setHowManyFruits}
          />
        </div>
        <div className='inner-container'>
          <FormName 
            name={name}
            setName={setName}
          />
        </div>
        <div className='inner-container'>
          <SubmitButton
          submit={submit}
          setSubmit={setSubmit}
          />
        </div>
      </div>
      )}

      
    </div>

  )
}
