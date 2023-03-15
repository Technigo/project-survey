import React from 'react'

const hornAdjectives = [
  'golden',
  'sparkling',
  'shiny',
  'colorful'
]

export const Adjective = ({ horn, setHorn }) => {
  const handleHornAdjective = (event) => {
    setHorn(event.target.value)
  }
  return (

    <form onSubmit={(event) => event.preventDefault()}>
      Choose one of the following states that tingles the magic in you:
      {hornAdjectives.map((hornAdjective) => (
        <label key={hornAdjective} htmlFor="myradio">
          <input
            type="radio"
            value={hornAdjective}
            onChange={handleHornAdjective}
            checked={horn === hornAdjective} />
          {hornAdjective}
        </label>
      ))}

    </form>
  )
}

//     <form>
//       Choose one of the following states that tingles the magic in you:
//       <label>
//         <input
//           type="radio"
//           value="golden"
//           onChange={handleHornAdjective}
//           checked={horn === "golden"} />
//         Golden
//       </label>
//       <label>
//         <input
//           type="radio"
//           value="sparkling"
//           onChange={handleHornAdjective}
//           checked={horn === "sparkling"} />
//         Sparkling
//       </label>
//       <label>
//         <input
//           type="radio"
//           value="shiny"
//           onChange={handleHornAdjective}
//           checked={horn === "shiny"} />
//         Shiny
//       </label>
//       <label>
//         <input
//           type="radio"
//           value="colorful"
//           onChange={handleHornAdjective}
//           checked={horn === "colorful"} />
//         Colorful
//       </label>
//     </form>
//   )
// }