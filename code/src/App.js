/*import React from 'react'*/
import React, { useState } from 'react'

/* Down below from Technigo
export const App = () => {
  return (
    <div>
      Find me in src/app.js!
    </div>
  
  )
} */

export const App = () => {
  const [temperature, setTemperature] = useState(20);

  return (
    <div>


    <h1>Current temp> {temperature} degrees </h1>
    
    <button onClick={() => setTemperature(-5)}>Freeze!</button>

    {temperature > 100 && <p>Steamy!</p>}
    </div>
  );
}; 