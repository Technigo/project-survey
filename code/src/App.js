import React from 'react'
/*import ReactDOM from "react-dom";*/
/*import React, { useState } from 'react'*/
import { Header } from './Header'
import { Button } from './Button'
import { Drop } from './Drop'
import { Radio } from './Radio'
import { Submit } from './Submit'


/* Down below from Technigo
export const App = () => {
  return (
    <div>
      Find me in src/app.js!
    </div>
  
  )
} */

export const App = () => {
  return (
    <div>
        <Header />
        <Button />
        <Drop />
        <Radio />
        <Submit />


    </div>
  );
}; 