import React, { useState } from 'react';

import { Header } from './components/Header'
import { Form } from './components/Form'

export const App = () => {
const [displayForm, setDisplayForm] = useState(false)

const handleStartClick = event => {
  setDisplayForm(true)
}
  return (
    <>
      <div>
        {! displayForm ? (
        <div>
        <Header/>
        <button onClick={handleStartClick}>Click here to find out!</button>
        </div> )
        : (
        <Form/>
        )}
      </div>
    </>
  )
}
