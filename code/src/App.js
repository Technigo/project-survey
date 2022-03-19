import React, { useState } from 'react'
import Form from 'components/Form'
import FormResponse from 'components/FormResponse';


export const App = () => {
  const [submit, setSubmit] = useState(false);

  const [input, setInput] = useState({
    name: '',
    location: '',
    willTravel: false,
    roles: ''
  })

 if (submit === false) {
  return (
    <div>
     <Form 
      input={input}
      setInput={setInput}
      setSubmit={setSubmit}
      />
    </div>
  )
} else {
    return (
      <FormResponse 
        input={input}
        />
    )
  }
}
