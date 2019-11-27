import React, { useState } from 'react'

export const Form = () => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [wantsNewsletter, setWantsNewsletter] = useState(false)
  const [ageGroup, setAgeGroup] = useState()

  const ageGroups = [
    "0-18",
    "19-30",
    "31-39",
    "40+",
  ]

  return (
    <form onSubmit={(event) => event.preventDefault()}>

      {/* QUESTION 1 */}
      <label>Name:
<input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </label>

      {/* QUESTION 2 */}
      <label>Location:
      <select
          onChange={event => setLocation(event.target.value)}
          value={location}
        >
          <option value="">Select location:</option>
          <option value="Stockholm">Stockholm</option>
          <option value="Visby">Visby</option>
          <option value="Kalmar">Kalmar</option>
          <option value="Malmö">Malmö</option>
        </select>
      </label>

      {/* QUESTION 3 */}
      <label>
        Newsletter?
<input
          type="checkbox"
          checked={wantsNewsletter}
          onChange={event => setWantsNewsletter(event.target.checked)}
        />
      </label>

      {/* QUESTION 4 */}
      Age group:
{ageGroups.map(group => (<label key={group}>
        <input
          type="radio"
          value={group}
          onChange={event => setAgeGroup(event.target.value)}
          checked={ageGroup === group}
        />
        {group}
      </label>
      ))}
      < button type="submit" > Submit</button>
      <div className="summary">
        Summary:
        <hr></hr>
        Name: {name}
        <br></br>
        Location: {location}
        <br></br>
        Wants newsletter? {wantsNewsletter}
        <br></br>
        Age: {ageGroup}
      </div>
    </form >



  )
}




//SEVERAL CHECKBOXES//
// const interests = [
//   "Coding",
//   "Cooking",
//   "Canoeing",
//   "Crosswords",
// ]

// export const Interests = () => {
//   const [interestedIn, setInterestedIn] = useState(false)
//   return (
//     <form>
//       Interested in:
//       {interests.map(interest => (
//         <label key={interest}>
//           <input
//             type="checkbox"
//             name={interest}
//             value={interest}
//             checked={interestedIn}
//             onChange={event => setInterestedIn(event.target.checked)}
//           />
//         </label>
//       ))}
//     </form>
//   )
// }



