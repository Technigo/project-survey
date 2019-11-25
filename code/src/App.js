import React from 'react'
import { Header } from './Header'
import { Button } from './Button'
import { Drop } from './Drop'
import { Radio } from './Radio'
import { Submit } from './Submit'


/* below from import */
// export const App = () => {
//   return (
//     <div>
//       Find me in src/app.js!
//     </div>
//   )
// }


export const App = () => {

  return (
    <div>
      <Header />
      <Button />
      <Drop />
      <Radio />
      <Submit />
    </div>
  )
}
