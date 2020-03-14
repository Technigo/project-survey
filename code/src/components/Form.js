import React, { useState, useRef } from 'react'
import { EndPage } from 'components/EndPage'
import {RadioForm} from 'components/Radio'

export const values = ["", "", ""]

export const Form = () => {
  const [done, setDone] = useState(false)
  const inputRef = useRef()
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
      </form>
      {done && <RadioForm />}
</>

  )

}

// export const Select = () => {
//   const [location, setLocation] = useState("")
//   values[0] = location

//   // const handleSubmit = (evt) => {
//   //   evt.preventDefault()
//   //   alert(`Submitting Name ${name}`)

//   return (
//     // <form onSubmit={handleSubmit}>
//     <label>
//       My city:
//       <select
//         onChange={e => setLocation(e.target.value)}
//         value={location}


//       >
//         <option value="">Select location</option>
//         <option value="stockholm">Stockholm</option>
//         <option value="oslo">Oslo</option>
//         <option value="london">London</option>
//       </select>
//     </label>
//     // <input type="submit" value="Submit" />
//     // </form>
//   )

// }
// const ages = ["0-18", "19-30", "30-50", "50+"]

// export const Radio = () => {
//   const [age, setAges] = useState()
//   values[1] = age

//   // const handleSubmit = (evt) => {
//   //   evt.preventDefault()
//   //   alert(`Submitting Name ${name}`)
//   // }
//   return (
//     // <form onSubmit={handleSubmit}>

//     <label className="radio">
//       <p>Ages:</p>
//       {ages.map(group => (
//         <>
//           <p>{group}</p>
//           <input
//             type="radio"
//             value={group}
//             onChange={e => setAges(e.target.value)}
//             checked={age === group}
//           />
//         </>
//       ))}

//     </label>

//     // <input type="submit" value="Submit" />
//     // </form>
//   )

// }

export const Text = () => {
  const [name, setName] = useState("")
  values[2] = name

  // const handleSubmit = (evt) => {
  //   evt.preventDefault()
  //   alert(`Submitting Name ${name}`)
  // }

  return (
    // <form onSubmit={handleSubmit}>
    <label>
      Frirst Name:
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </label>
    // <input type="submit" value="Submit" />
    // </form>
  )

}
