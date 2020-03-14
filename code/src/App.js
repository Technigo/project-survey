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
  const [value, setValue] = useState(5);

  return (
  <>
    
    {section === 'firstQuestion' && (
      <>
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
      <div id="error">Please enter your name</div>
 

     <button onClick= {event => {
       
      if (name === "") {
        document.getElementById("error").classList.add("show-error");
      }
      else {
        setSection("secondQuestion")
        }
      }
      
      }>
        Save & Continue
      </button> 
      </form>
     
    </article>
     <div className="progress-bar">
     <div className="filler" style={{width: '25%'}}></div>
   </div>
   </>
 
  )}

    {section === 'secondQuestion' && (
      <>
    <article> 
      <h2> Second question </h2>
      <form 
      className="radio-button"
      onSubmit={event => event.preventDefault()}>
        <h3>Please choose your age group:</h3>
        
        {AgeGroups.map(group => (
        <label key={group}>
        <input 
        type="radio"
        value={group}
        onChange={event => setAgeGroup(event.target.value)}
        checked={ageGroup === group}
        />
        <span class="checkmark"></span>
        {group}
        </label>
       
        ))}
         <div id="error">Please choose your age group</div>
   
        <button onClick={event => 
          {if (ageGroup === undefined) {
            document.getElementById("error").classList.add("show-error");
          }
          else {
            setSection("thirdQuestion")
          }
          }
          }>Save & Continue</button>
        </form>
       
    </article>
     <div className="progress-bar">
     <div className="filler" style={{width: '50%'}}></div>
   </div>
   </>
    )}

  {section === 'thirdQuestion' && (
    <>
    <article>
      <h2>Third Question</h2>
      <form onSubmit={event => event.preventDefault()}>
      <h3>Please choose one option:</h3>

      <select
      onChange={event => setOption(event.target.value)}         
      value={option}
      className="input small">
      <option value="">For how long have you owned our product?</option>
      <option value="Less than a month">Less than a month</option>
      <option value="More than a month">More than a month</option>
      <option value="More than 6 months">More than 6 months</option>
      </select>
      <div id="error">Please choose your age group</div>
      
  
      <button onClick={event => 
        {if (option === undefined) {
          document.getElementById("error").classList.add("show-error");
        }
        else {
          setSection("FourthQuestion")
        }}
        }
        >Save & Continue</button>
      </form>
  
    </article>
    <div className="progress-bar">
    <div className="filler" style={{width: '75%'}}></div>
  </div>
  </>
  )}

{section === 'FourthQuestion' && (
  <>
    <article>
      <h2>Fourth Question</h2>
      <form onSubmit={event => event.preventDefault()}>
      <h3>How satisfied are you with our product? Choose from 1 - 10:</h3>

      <input type="range" min="1" max="10" step="1" value={value}
      onChange={event => setValue(event.target.value)}         
      >       
      </input>
      <div>Value: {value}</div>

      <button onClick={event => setSection("summary")}>Submit</button>
      </form>
     
    </article>
     <div className="progress-bar">
     <div className="filler" style={{width: '100%'}}></div>
   </div>
   </>
  )}

  {section === "summary" && (
    <article>
      <h2>Summary</h2>

      <ul>
        <li>Name: {name} </li>
        <li> Age: {ageGroup} years old </li>
        <li> Ownership: {option} </li>
        <li> Product satisfaction: {value} </li>
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