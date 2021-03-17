import React from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'

export const App = () => {
  return (
    <>
      <Header />
      <Form />
      {/* <div className="summary">
        <p>Name: </p>name={props.name}
        <p>Genre: {genre}</p>
        <p>Language: {language}</p>
        <p>E-mail: {email}</p>
      </div> */}
    </>
  )
}