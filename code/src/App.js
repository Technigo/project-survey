import React from 'react'
import { Form } from 'components/Form'
import logo from './images/logo_white.png'

export const App = () => {

  return (
    <div className="header-wrapper">
      <header>
        <img src={logo} alt="my logo"/>
      </header>
      <div className="survey-info">
        <div className="container">
      <h2 className="survey-text">Find a game based on your profile</h2>
      <Form/>
      </div>
      </div>
   </div>
  )
}
