import React, { useState } from 'react'

import Header from './components/Header'
import NameQuestion from './components/NameQuestion'
import RadioButtonOne from './components/RadioButtonOne'
import SelectOption from './components/SelectOption'
import RadioButtonTwo from './components/RadioButtonTwo'
import Checkbox from './components/Checkbox'
import Summary from './components/Summary'


const Form = () => {
  const [name, setName] = useState('')
  const [readingTime, setreadingTime] = useState('')
  const [favoriteTime, setFavoriteTime] = useState('')
  const [favoritePlace, setFavoritePlace] = useState ('')
  const [isChecked, setIsChecked] = useState([])
  const [isSubmited, setIsSubmited] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)

  const isSurveyComplete = (event) => {
    event.preventDefault()
    setIsSubmited(true)
  }


  return (
    <main className="form">
      <form onSubmit={isSurveyComplete}>
        {!isSubmited ? (
          <>
            <Header />
            <NameQuestion name={name} setName={setName} />
            <RadioButtonOne readingTime={readingTime} setTime={setreadingTime} />
            <SelectOption favoriteTime={favoriteTime} setFavoriteTime={setFavoriteTime} />
            <RadioButtonTwo favoritePlace={favoritePlace} setFavoritePlace={setFavoritePlace} />
            <Checkbox isChecked={isChecked} setIsChecked={setIsChecked}/>
          </>
          ) : (
          <Summary 
            readingTime={readingTime} 
            favoriteTime={favoriteTime} 
            place={favoritePlace} 
          />
        )}
      </form>
    </main>
  )    
}

export default Form 