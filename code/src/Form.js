import React, { useState } from 'react'

import Header from './components/Header'
import FirstQuestion from './components/FirstQuestion'
import SecondQuestion from './components/SecondQuestion'
import ThirdQuestion from './components/ThirdQuestion'
import Summary from './components/Summary'


export const Form = () => {
  const [time, setTime] = useState('')
  const [favoriteTime, setFavoriteTime] = useState('')
  const [favoritePlace, setFavoritePlace] = useState ('')
  const [section, setSection] = useState('startPage')
 
  const handleSubmit = (event) => {
    event.preventDefault()
    if (time === '') {
      setSection('firstQuestion')
    } else if (favoriteTime ==='') {
      setSection('secondQuestion')
    } else if (favoritePlace ==='') {
      setSection('thirdQuestion')
    } else {
      setSection('summary')
    } 
  }

  return (
    <>
      {section !== 'summary' ? (
        <form onSubmit={handleSubmit}>
          {section === 'startPage' && (
            <Header />
          )}
          
          {section ==='firstQuestion' && (
            <FirstQuestion readingTime={time} setTime={setTime} />
          )}

          {section ==='secondQuestion' && (
            <SecondQuestion favoriteTime={favoriteTime} setFavoriteTime={setFavoriteTime} />
          )}

          {section ==='thirdQuestion' && (
            <ThirdQuestion place={favoritePlace} setFavoritePlace={setFavoritePlace} />
          )}
        </form>
      ):(
        <>
          <Summary 
            time={time} 
            favoriteTime={favoriteTime} 
            place={favoritePlace} 
          />
        </>
      )}
    </>
  )     
}

export default Form 