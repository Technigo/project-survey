import React, { useState } from 'react'

import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'

const Form = () => {
  const [values, setValues] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    company: '',
    title: '',
    age: ''
  })

  const handleResponse = input => e => {
    setValues({ ...values, [input]: e.target.value})
    console.log(e.target.value)
  }

  const next = () => {
    setValues({ ...values, "step": (values.step + 1)})
    console.log(values)
  }

  const previous = () => {
    setValues({ ...values, "step": (values.step - 1)})
    console.log(values)
  }

  switch (values.step) {
    case 1 :
      return (
        <>
          <FirstQuestion values={ values } handleResponse={ handleResponse } next={next} previous={previous}/>
          <h6>{ JSON.stringify(values) }</h6>
        </>
      )
    case 2 :
      return (
        <>
          <SecondQuestion values={ values } handleResponse={ handleResponse } next={next} previous={previous} />
          <h6>{ JSON.stringify(values) }</h6>
        </>
      )
    case 3 :
      return (
        <>
          <ThirdQuestion values={ values } handleResponse={ handleResponse } next={next} previous={previous} />
          <h6>{ JSON.stringify(values) }</h6>
        </>
      )
    default :
      return (
        <p>Error!</p>
      )
  }
}

export default Form