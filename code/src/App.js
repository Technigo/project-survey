import React from 'react'

import FormSelect from './components/FormSelect'
import FormRadio from './components/FormRadio'
import FormName from './components/FormName'


export const App = () => {
  return (
    <div className='container'>
      <FormSelect />

      <FormRadio />

      <FormName />
    </div>
  )
}
