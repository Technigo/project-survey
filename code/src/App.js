import React from 'react'
import { Header } from './Components/Header'
import { Survey } from'./Components/Survey'


export const App = () => {
  return (
    <div className="allContent">
      <div className="earth"/>
      <Header />
      <p className="spaceIntro">and explore the unknown</p>
      <Survey />
    </div>
  )
}
