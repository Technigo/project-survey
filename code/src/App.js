import React, { useState } from "react"
import ReactDOM from 'react-dom'

export const App = () => {
  const AgeGroups = [
    '18-25',
    '26-30',
    '30+'
  ]

  const [section, setSection] = useState('firstQuestion');
  const [name, setName] = useState("");
  const [ageGroup, setAgeGroup] = useState();
  const [option, setOption] = useState();

  return (
  <>
    {section === 'firstQuestion' && (
    <article>
      <h2> First question </h2>
      <form onSubmit={event => event.preventDefault()}>
      <h3>Please enter your first name:</h3>
      
      <input
      className="input"
      type="text"
      placeholder="First name"
      onChange={event => setName(event.target.value)}
      value={name}
      >
      </input>

     <button onClick={event => setSection("secondQuestion")}>Submit</button> 
      </form>
      
    </article>
 
  )}

    {section === 'secondQuestion' && (
    <article> 
      <h2> Second question </h2>
      <form onSubmit={event => event.preventDefault()}>
        <h3>Please choose your age group:</h3>
        
        {AgeGroups.map(group => (
        <label key={group}>
        <input 
        className="input"
        type="radio"
        value={group}
        onChange={event => setAgeGroup(event.target.value)}
        checked={ageGroup === group}
        />
        {group}
        </label>
        ))}
        <button onClick={event => setSection("thirdQuestion")}>Submit</button>
        </form>
     
    </article>
    )}

  {section === 'thirdQuestion' && (
    <article>
      <h2>Third Question</h2>
      <form onSubmit={event => event.preventDefault()}>
      <h3>Please choose one option:</h3>

      <select
      onChange={event => setOption(event.target.value)}         
      value={option}
      className="input small">
      <option value="">Choose one option:</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      </select>
      <button onClick={event => setSection("summary")}>Save & Continue</button>
      </form>
    </article>
  )}

  {section === "summary" && (
    <article>
      <h2>Summary</h2>

      <ul>
        <li>Name: {name} </li>
        <li> Age: {ageGroup} years old </li>
        <li> Option: {option} </li>
      </ul>

    </article>

  )}

  </>
  )
}

// export const SummarizeAndHide = () => {

//   ReactDOM.render(<Summary />, document.getElementById('root'))
// }

// export const Summary = (props) => {
//   const [name, age, option] = props;
//   return (
//     <>
//       <h2>Summary:</h2>
//       <p>
//         Your name: {name}
//       </p>
//     </>
//   )
// }

// </main>
// )
// }