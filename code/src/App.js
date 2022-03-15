import React, {useState} from 'react'
import {Counter} from 'components/Counter'
import Header from 'components/Header'
import Inputfield from 'components/Inputfield'
import Radiobtn from 'components/Radiobtn'
import Dropdown from 'components/Dropdown'

// const ageGroups= [
//   '0-18',
//   '19-30',
//   '30+'
// ]


export const App = () => {
  // const [temperature, setTemperature] = useState(20);
  // const [wantsNewsletter, setWantsNewsletter] = useState(false)
  const [counter, setCounter] = useState(0)

  return (
  <section>

    <header>
      <Header/>
    </header>

    <div>
      <Inputfield/>
    </div>

    <div>
      <Radiobtn/>
    </div>

    <div>
      <Dropdown/>
    </div>


    <div>
    <h2>SUPER COUNTER TECHNIGO</h2>
      <Counter counter = {counter} setCounter= {setCounter}/>
    </div>


     {/* <div>
     <h1>Current temperature: {temperature} degrees </h1>
    
     <button onClick={() => setTemperature(-5)}>Freez!</button>
     <button onClick={() => setTemperature(30)}>warm!</button>
   <button onClick={() => setTemperature(120)}>Boiling!</button>
   </div>


       <form>
         <label> Newsletter?
           <input
           type="checkbox"
           checked={wantsNewsletter}
           onChange={event=> setWantsNewsletter(event.target.checked)}
           />
         </label>
         <label> No thank you i dont want a Newsletter?
           <input
           type="checkbox"
           checked={wantsNewsletter}
           onChange={event=> setWantsNewsletter(event.target.checked)}
           />
         </label>
       </form>
      */}
          </section>
  )
}
