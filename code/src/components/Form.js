import React, { useState } from 'react'

const values = ["", "", ""]
export const Form = () => {
  const [name, setName] = useState("")

  const handleSubmit = (evt) => {
    evt.preventDefault()
    alert(`Submitting Name ${values.toString()}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      < Select />
      < Radio />
      < Text />
      <input type="submit" value="Submit" />
    </form>
  )

}

export const Select = () => {
  const [location, setLocation] = useState("")
  values[0] = location

  // const handleSubmit = (evt) => {
  //   evt.preventDefault()
  //   alert(`Submitting Name ${name}`)

  return (
    // <form onSubmit={handleSubmit}>
    <label>
      My city:
      <select
        onChange={e => setLocation(e.target.value)}
        value={location}


      >
        <option value="">Select location</option>
        <option value="stockholm">Stockholm</option>
        <option value="oslo">Oslo</option>
        <option value="london">London</option>
      </select>
    </label>
    // <input type="submit" value="Submit" />
    // </form>
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

    <label>
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
