import React from 'react'

// import {Counter} from 'components/Counter'
// import {Infobanner} from 'components/Infobanner'

// Imported Components
import Form from 'components/Form'
import Header from 'components/Header'



export const App = () => {
  // const [temperature, setTemperature] = useState(20);
  // const [wantsNewsletter, setWantsNewsletter] = useState(false)
  // const [counter, setCounter] = useState(0)

  return (
  <section>
    <header>
      <Header/>
    </header>

    <Form/>

    
    {/* <div>
    <h2>SUPER COUNTER TECHNIGO</h2>
      <Counter counter = {counter} setCounter= {setCounter}/>
    </div>
    
    <div>
      <Infobanner counter = {counter}/>
    </div> */}
    
    
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
