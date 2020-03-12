import React from 'react'
import { Header } from './Components/Header'
import { Survey } from'./Components/Survey'


export const App = () => {
  return (
    <div>
      <Header />
      <p className="spaceIntro">Let's explore space</p>
      <Survey />
    </div>
  )
}
