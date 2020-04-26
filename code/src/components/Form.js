import React, { useState, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {RadioForm, Radio} from 'components/Radio'
import {Text} from 'components/Text'
import { Select } from './Select'
import {Checkbox} from './Checkbox'
import { Container, StyledLink } from 'shared/shared'
import {addInfo} from '../reducers/survey'

export const values = {name: "", room: "", city: "", parking: "no"}

export const Form = () => {
  const myObject = useSelector(state=>state.survey.answers)
  const [object, setObject] = useState({})
  const [done, setDone] = useState(false)
  const [name, setName] = useState("")
  const dispatch = useDispatch()
  
  // var hasName = (name === 'true') ? 'Y' :'N';
  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(addInfo(object))
    setObject({})
    // alert(`Submitting Name ${values.toString()}`) 
   
    
  }
    return (
      <Container>
      <p>{myObject.name}</p>
      <form onSubmit={handleSubmit}>
        my form
        <Text object={object} setObject={setObject} />
        <Radio />
        <Checkbox object={object} />
        <Select />
        <button type="submit">Click me</button>
      </form>
      <Link to="/endpage">End Page</Link>
</Container>

    )

}

export const Bar = (props) => {

  return (
    <div className = "bar">
    <div className = "filled" style={{width: `${props.size}%`}} />
    </div>
  )
}

// export const Form = () => {
//   const inputRef = useRef()
//   const [done, setDone] = useState(false)
  
//   // var hasName = (name === 'true') ? 'Y' :'N';
//   const handleSubmit = (evt) => {
//     evt.preventDefault()
//     inputRef.current.className += " noShow"
    
//     // alert(`Submitting Name ${values.toString()}`) 
    
//   }
//   return (
//     <>
//       <form className="myForm" onSubmit={handleSubmit} ref={inputRef}>
//        <p>Please fill in your name</p>
//         < Text />
//         <button type ="submit" className="btn" onClick={setDone}>Submit answers</button>
//       <Bar size = "25"/>
//       </form>
//       {done && <RadioForm />}
// </>

//   )

// }
