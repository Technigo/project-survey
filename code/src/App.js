import React, { useState } from 'react'
import {Dropdown} from './Dropdown'
import {Radio} from './Radio'
import {Checkbox} from './Checkbox'
import {Submit} from './Submit'
import {Input} from './Input'
import {Summary} from './Summary'


export const App = () => {
  const [location, setLocation] = useState("")
  const [duration, setDuration] = useState ("")
  const[mail, setMail] = useState("")

  const [showSummary, setShowSummary] = useState(false)


  const handleSubmit = event => {
    event.preventDefault()
    setShowSummary(true)
  }

  return (
    <div className="formContainer">
      
      {!showSummary ?  (
        <form onSubmit={handleSubmit}> 
          <Dropdown value={location} onChanged={setLocation} />
          <Radio value={duration} onChanged={setDuration}/>
          <Input value={mail} onChanged={setMail} />
          <Checkbox />
          <Submit />
        </form> 
      ) : (
        <Summary location={location} duration={duration} mail={mail}/>
      )}

    </div>
  )
}
