import React, {useState} from 'react'

import { CheckBox } from 'Components/CheckBox';
import { Select } from 'Components/Select'
import { RadioButtons } from 'Components/RadioButtons'



export const App = () => {
  const [name, setName] = useState('')
      
  return (
    <span>
      <form onSubmit ={event => event.preventDefault()}>
        <h1>The state is: {name}</h1>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name} />
      </form>
      <Select />
      <CheckBox />
      <RadioButtons />
    </span>
  );
};
 //  <Counter counter = {counter} setCounter = {setCounter}/>
      
      // {
      //   'question1': ''
      // })
      // if (counter === 0) {
      //     return (
      //         <div>
      //           <Counter counter = {counter} setCounter = {setCounter}/>
      //           <h2>First Page</h2>
      //           {/* ANVÄND FORM ISTÄLLET FÖR COUNTER */}
      //           <InfoBanner counter = {counter} />
      //         </div>
      //       )
      //     } else if (counter === 1 { 
      //       } else {  
      //         }
      //         }
      //         return (
      //           )
      //         }
              



              
              // export const App = () => {
              
              //   const [counter, setCounter] = useState(0)
              //   return (
              //     <div>
              //       <h2>SUPER COUNTER</h2>
              //       <Counter counter = {counter} setCounter = {setCounter}/>
              //       <InfoBanner counter = {counter} />
              //     </div>
              //   )
              // }