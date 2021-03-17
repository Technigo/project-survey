import React, { useState } from 'react'

import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import Summary from './Summary'
import Confirmation from './Confirmation'

const defaultValues = () => {
  return {
    step: 1,
    firstName: '',
    lastName: '',
    company: '',
    title: '',
    age: ''

  }
}

const Form = () => {
  const [values, setValues] = useState(defaultValues())
  // const [values, setValues] = useState({
  //   step: 3,
  //   firstName: '',
  //   lastName: '',
  //   company: '',
  //   title: '',
  //   age: ''
  // })


  
  const onInputResponse = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value})
    console.log(e.target.value)
  }

  const onButtonResponse = e => {
    console.log(e.target.id)
    switch (e.target.id) {
      case 'previous' :
        setValues({ ...values, "step": (values.step - 1)})
        break
      case 'next' :
        setValues({ ...values, "step": (values.step + 1)})
        break
      case 'submit' :
        setValues({ ...values, "step": 0})
        break
      case 'reset' :
        console.log('yo')
        setValues(defaultValues())
        break
      default :
      return null
    }
  }

  switch (values.step) {
    case 1 :
      return (
        <>
          <FirstQuestion values={values} 
          onInputResponse={onInputResponse} 
          onButtonResponse={onButtonResponse}/>
          {/* <h6>{ JSON.stringify(values) }</h6> */}
        </>
      )
    case 2 :
      return (
        <>
          <SecondQuestion values={values} 
          onInputResponse={onInputResponse} 
          onButtonResponse={onButtonResponse}/>
          {/* <h6>{ JSON.stringify(values) }</h6> */}
        </>
      )
    case 3 :
      return (
        <>
          <ThirdQuestion values={values} 
          onInputResponse={onInputResponse} 
          onButtonResponse={onButtonResponse} />
          {/* <h6>{ JSON.stringify(values) }</h6> */}
        </>
      )
    case 4 :
      return (
        <>
          <Summary values={values} 
          onInputResponse={onInputResponse} 
          onButtonResponse={onButtonResponse} />
          {/* <h6>{ JSON.stringify(values) }</h6> */}
        </>
      )
    case 0 :
      return (
        <>
          <Confirmation onButtonResponse={onButtonResponse} />
        </>
      )
    default :
      return (
        <p>Error!</p>
      )
  }
}

export default Form