import React, { useState } from 'react'

export const Form = () => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [wantsNewsletter, setWantsNewsletter] = useState(false)
  const [ageGroup, setAgeGroup] = useState()
  const [showSummary, setShowSummary] = useState(false) // False because we don't want to show summary to start with

  const ageGroups = [
    "0-18",
    "19-29",
    "30-39",
    "40-49",
    "50+"
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowSummary(true)//On submit we want to show the summary
  }

  return (
    <div>
      {/*If the first is true - everything after && will render*/}
      {showSummary && (<div className="summary">
        <h1>Summary:</h1>
        <br></br>
        {wantsNewsletter ? 'You love christmas, yey!' : 'Ok, so you are obviously a grinch'}
        <br></br>
        You answered that {location} is your decoration of choice and that you've celebrated Christmas around {ageGroup} times!
<br></br>
        Well {name} to you too!
      </div>
      )}

      {/*If summary is not shown (if showSummary is false), then form is shown*/}
      {!showSummary &&
        (

          <form onSubmit={handleSubmit}>

            {/* QUESTION 4 */}
            How many times have you celebrated Christmas?
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

            {/* QUESTION 1 */}
            <label>How do you say Merry Christmas in your language?
<input
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
            </label>

            {/* QUESTION 2 */}
            <label>Favourite christmas decoration:
      <select
                onChange={event => setLocation(event.target.value)}
                value={location}
              >
                <option value="">Select decoration:</option>
                <option value="Christmas tree">Christmas trees</option>
                <option value="Advent candles">Advent candles</option>
                <option value="Poinsettia flower">Poinsettia flowers</option>
                <option value="Star lamp">Star lamps</option>
                <option value="nothing">I said I don't celebrate christmas!</option>
              </select>
            </label>

            {/* QUESTION 3 */}
            <label>
              Enjoy christmas?
<input
                type="checkbox"
                checked={wantsNewsletter}
                onChange={event => setWantsNewsletter(event.target.checked)}
              />
            </label>

            < button type="submit" > Submit</button>
          </form >

        )
      }
    </div>


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



