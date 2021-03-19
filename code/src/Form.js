import React, { useState } from 'react'

import Header from './components/Header'
import FirstQuestion from './components/FirstQuestion'
import SecondQuestion from './components/SecondQuestion'
import ThirdQuestion from './components/ThirdQuestion'
import Summary from './components/Summary'
import ProgressBar from './components/ProgressBar'
import NameQuestion from './components/NameQuestion'


export const Form = () => {
  const [name, setName] = useState('')
  const [time, setTime] = useState('')
  const [favoriteTime, setFavoriteTime] = useState('')
  const [favoritePlace, setFavoritePlace] = useState ('')
  const [section, setSection] = useState('startPage')
  const [progress, setProgress] = useState(0)


  const handleSubmit = (event) => {
    event.preventDefault()
    if (name === '') {
      setSection('firstQuestion')
      setProgress([0])
    } else if (time === '') {
      setSection('secondQuestion')
      setProgress([30])
    } else if (favoriteTime ==='') {
      setSection('thirdQuestion')
      setProgress([60])
    } else if (favoritePlace ==='') {
      setSection('fourthQuestion')
      setProgress([90])
    } else {
      setSection('summary')
    } 
  }

  return (
    <main className="form">
      {section !== 'summary' ? (
        <form onSubmit={handleSubmit}>
          {section === 'startPage' && (
            <Header />
          )}

          {section ==='firstQuestion' && (
            <>
              <NameQuestion name={name} setName={setName} />
              <ProgressBar progress= {progress} />
            </>
          )}
          
          {section ==='secondQuestion' && (
            <>
            <FirstQuestion readingTime={time} setTime={setTime} />
            <ProgressBar progress= {progress} />
            </>
          )}

          {section ==='thirdQuestion' && (
            <>
            <SecondQuestion favoriteTime={favoriteTime} setFavoriteTime={setFavoriteTime} />
            <ProgressBar progress= {progress} />
            </>
          )}

          {section ==='fourthQuestion' && (
            <>
            <ThirdQuestion place={favoritePlace} setFavoritePlace={setFavoritePlace} />
            <ProgressBar progress= {progress} />
            </>
          )}
        </form>
      ):(
        <>
          <Summary 
            name={name}
            time={time} 
            favoriteTime={favoriteTime} 
            place={favoritePlace} 
          />
        </>
      )}
    </main>
  )     
}

export default Form 