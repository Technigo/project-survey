import React, {useState} from 'react'
import { Counter } from 'Components/Counter';
import { InfoBanner } from 'Components/InfoBanner'

export const App = () => {

  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h2>SUPER COUNTER</h2>
      <Counter counter = {counter} setCounter = {setCounter}/>
      <InfoBanner counter = {counter} />
    </div>
  )
}

// export const App = () => {

//   const [counter, setCounter] = useState(0)
//   const [surveyAnswers, setAnswer] = useState({
//     'question1': ''
//   })
//   if (counter === 0) {
//     return (
//       <div>
//         <Counter counter = {counter} setCounter = {setCounter}/>
//         <h2>First Page</h2>
//         {/* ANVÄND FORM ISTÄLLET FÖR COUNTER */}
//         <InfoBanner counter = {counter} />
//       </div>
//     )
//   } else if (counter === 1 { 
//   } else {  
//   }
//   }
//   return (
//   )
// }
