import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Form } from './App'



 const App = () => {
    const [holiday, setHoliday] = useState();
  const [name, setName] = useState();
  return (
   <section>
       <div className="mad-container">
<div className="word-container">
<form>
<h2>Name</h2>  <br></br>
        <label>
          <input
            type="checkbox"
            value="Poya"
            onChange={event => setName(event.target.value)}
           checked={name === "Poya"}
            />
            Poya
          </label>
          <br></br>
        <label>
          <input
            type="checkbox"
            value="Maksymilian"
            onChange={event => setName(event.target.value)}
           checked={name === "Maksymilian"}
            />
            Maksymilian
          </label>
          <br></br>
          <label>
          <input
            type="checkbox"
            value="Van"
            onChange={event => setName(event.target.value)}
           checked={name === "Van"}
            />
            Van
          </label>
          <br></br>
         
          </form>
      
          </div>

          <div className="word-container">
<form>
        <h2>Holiday</h2> <br></br>
        <label>
          <input
            type="checkbox"
            value="Christmas"
            onChange={event => setHoliday(event.target.value)}
           checked={holiday === "Christmas"}
            />
            Christmas
          </label>
          <br></br>
        <label>
          <input
            type="checkbox"
            value="Thanksgiving"
            onChange={event => setHoliday(event.target.value)}
           checked={holiday === "Thanksgiving"}
            />
            Thanksgiving
          </label>
          <br></br>
          <label>
          <input
            type="checkbox"
            value="Halloween"
            onChange={event => setHoliday(event.target.value)}
           checked={holiday === "Halloween"}
            />
            Halloween
          </label>
          <br></br>
         
          </form>
      
          </div>
          </div>
<br></br>


<div className="madLib">

<input
        type="text"
        inChange={event => setName(event.target.value)}
        value={name}
        className="line"
        />! It´s time for <input
        type="text"
        inChange={event => setHoliday(event.target.value)}
        value={holiday}
        className="line"
        /> and it´s (Person)´s favorit holiday! 
    For this year he will dress up as a (costym). Last year he was a (Disney figur). 
    (Person) hope to get alot of (some thing to eat), but if not he will throw (sak) 
    all over the place. No one wants to come between (person) and his (something to eat)
    </div>
   
    </section>

 
  );
}





const rootElement = document.getElementById("root");
ReactDOM.render(<App />, document.getElementById('root'))
