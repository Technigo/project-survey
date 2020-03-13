import React from 'react'
import { Header } from './Components/Header'
import { Survey } from'./Components/Survey'


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
