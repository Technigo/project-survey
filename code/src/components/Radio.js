import React, { useState, useRef } from 'react'
import { EndPage } from 'components/EndPage'
import {SelectForm} from 'components/Select'
import {Form, values} from 'components/Form'

export const RadioForm = () => {
    const [done, setDone] = useState(false)
    const radioRef = useRef()
    // var hasName = (name === 'true') ? 'Y' :'N';
    const handleSubmit = (evt) => {
      evt.preventDefault()
      radioRef.current.className += " noShow"
      
      // alert(`Submitting Name ${values.toString()}`) 
      
    }
    return (
      <>
        <form className="myForm" onSubmit={handleSubmit} ref={radioRef}>
          <h1>I love you</h1>
          < Radio />
          <button type ="submit" className="btn" onClick={setDone}>Submit answers</button>
        </form>
        {done &&  < SelectForm /> }
  
      </>
  
    )
  
  }
  const ages = ["0-18", "19-30", "30-50", "50+"]

export const Radio = () => {
  const [age, setAges] = useState()
  values[1] = age

  // const handleSubmit = (evt) => {
  //   evt.preventDefault()
  //   alert(`Submitting Name ${name}`)
  // }
  return (
    // <form onSubmit={handleSubmit}>

    <label className="radio">
      <p>Ages:</p>
      {ages.map(group => (
        <>
          <p>{group}</p>
          <input
            type="radio"
            value={group}
            onChange={e => setAges(e.target.value)}
            checked={age === group}
          />
        </>
      ))}

    </label>

    // <input type="submit" value="Submit" />
    // </form>
  )

}