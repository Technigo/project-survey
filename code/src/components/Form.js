import React, { useState, useRef } from 'react'
import { EndPage } from 'components/EndPage'
import {RadioForm} from 'components/Radio'
import {Text} from 'components/Text'

export const values = ["", "", ""]

export const Form = () => {
  const inputRef = useRef()
  const [done, setDone] = useState(false)
  
  // var hasName = (name === 'true') ? 'Y' :'N';
  const handleSubmit = (evt) => {
    evt.preventDefault()
    inputRef.current.className += " noShow"
    
    // alert(`Submitting Name ${values.toString()}`) 
    
  }
  return (
    <>
      <form className="myForm" onSubmit={handleSubmit} ref={inputRef}>
        <h1>I love you</h1>
        < Text />
        <button type ="submit" className="btn" onClick={setDone}>Submit answers</button>
      <Bar size = "25"/>
      </form>
      {done && <RadioForm />}
</>

  )

}

export const Bar = (props) => {

  return (
    <div className = "bar">
    <div className = "filled" style={{width: `${props.size}%`}} />
    </div>
  )
}
