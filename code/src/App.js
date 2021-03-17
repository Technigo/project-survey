import React, {useState} from 'react'

import data from './data.json'

import Header from './components/Header'
import Form from './components/Form'





export const App = () => {
  const [answer, setAnswer] = useState()
  return (
    <div>
      <Header/>
      <Form 
        catBreeds={data.catsArray} 
        title="Cats personality research" 
        radioButtonsValues={data.radioButtonsValues}
        radioButtonsQuestions={data.radioButtonsQuestions}
        answer={answer}
        setAnswer={setAnswer}/>
    </div>
  )
}
