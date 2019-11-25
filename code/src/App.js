import React, { useState } from 'react'


/* below from import */
// export const App = () => {
//   return (
//     <div>
//       Find me in src/app.js!
//     </div>
//   )
// }


export const App = () => {
  const [temperature, setTemperature] = useState(20)

  return (
    <div>
      <h1>Current temperature: {temperature} degrees</h1>

      <button onClick={() => setTemperature(-5)}>Freeze!</button>
      <button onClick={() => setTemperature(30)}>Warm!</button>
      <button onClick={() => setTemperature(120)}>Boil!</button>
    </div>
  )
}
