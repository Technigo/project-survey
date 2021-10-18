import React from 'react'
import { Form } from 'components/Form'

export const App = () => {

  return (
    <>
      <header>
        <h1 className="header-title">Game finder</h1>
      </header>
      <div className="survey-info">
      <h2 className="survey-text">Find a game based on your profile</h2>
      </div>
      <Form/>
   </>
  )
}
