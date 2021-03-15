import React from 'react'

import data from './data.json'

import Header from './components/Header'
import Form from './components/Form'

const catsArray = data.catsArray

export const App = () => {
  return (
    <div>
      <Header title="Test title"/>
      <Form catBreeds={catsArray} title="Form title"/>
    </div>
  )
}
