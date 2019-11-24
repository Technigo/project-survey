import React from 'react'
import './app.css'
import { QuestionOne } from './components/QuestionOne'
import { QuestionTwo } from './components/QuestionTwo'
import { QuestionThree } from './components/QuestionThree'

export const App = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you!");
  }

  return (
    <div className="app">
      <h1> Quiz time!</h1>

      <form onSubmit={handleSubmit}>

        <QuestionOne />
        <QuestionTwo />
        <QuestionThree />

        <button>Done!</button>

      </form>

    </div>
  )
}


// export const App = () => {

//   const [name, setName] = useState("")

//   return (
//     <div className="app">
//       <h1> Quiz!</h1>

//       <form onSubmit={event => event.preventDefault()}>

//         < input
//           type="text"
//           onChange={event => setName(event.target.value)}
//           value={name}
//         />

//       </form>
//     </div>
//   )
// }
