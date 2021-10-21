import React from 'react'
import { Form } from 'components/Form'
import logo from './images/logo_white.png'

export const App = () => {

  return (
    <>
    <div className="header-wrapper">
      <header>
        <img src={logo} alt="my logo"/>
      </header>
      <div className="survey-info">
        <div className="container">
      
      <Form/>
      </div>
      </div>
   </div>
   <footer>
     <h3>Designed and Developed by:</h3>
     <p>Lovisa Carling</p>
   </footer>
   </>
  )
}
