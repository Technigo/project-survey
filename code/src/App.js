import React from 'react'
import { Header } from './components/Header'
import { Survey } from'./components/Survey'


export const App = () => {
  return (
    <div className="allContent">
      <Header />
      <p className="spaceIntro">and explore the unknown</p>
      <div className="alien" />
      <Survey />
    </div>
  )
}
