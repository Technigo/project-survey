import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Form } from './App'


const thingsTwos = [
    "toilet paper",
    "eggs",
    "yarn"
  ]

 const App = () => {
    const [holiday, setHoliday] = useState("");
    const [nameOne, setNameOne] = useState("");
    const [costumeOne, setCostumeOne] = useState("");
    const [costumeTwo, setCostumeTwo] = useState("");
    const [food, setFood] = useState("");
    const [hustle, setHustle] = useState("");
    const [things, setThings] = useState("");
    const [thingsTwo, setThingsTwo] = useState()
    const [phrase, setPhrase] = useState("")
  return (
   <section>

       <div className="header"><h1>Time For Halloween Mad Lib</h1></div>
       <div className="mad-container">

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

          <div className="word-container">
              
<form>
<h2>Name</h2>  <br></br>
        <label>
          <input
            type="checkbox"
            value="Poya"
            onChange={event => setNameOne(event.target.value)}
           checked={nameOne === "Poya"}
            />
            Poya
          </label>
          <br></br>
        <label>
          <input
            type="checkbox"
            value="Maksymilian"
            onChange={event => setNameOne(event.target.value)}
           checked={nameOne === "Maksymilian"}
            />
            Maksymilian
          </label>
          <br></br>
          <label>
          <input
            type="checkbox"
            value="Van"
            onChange={event => setNameOne(event.target.value)}
           checked={nameOne === "Van"}
            />
            Van
          </label>
          <br></br>
         
          </form>
      
          </div>

          <div className="word-container">
<form>
<h2>Costume</h2>  <br></br>
        <label>
          <input
            type="checkbox"
            value="Sponge Bob"
            onChange={event => setCostumeOne(event.target.value)}
            />
            Sponge Bob
          </label>
          <br></br>
        <label>
          <input
            type="checkbox"
            value="Scooby Doo"
            onChange={event => setCostumeOne(event.target.value)}
            />
            Scooby Doo
            </label>
          <br></br>
          <label>
          <input
            type="checkbox"
            value="E.T"
            onChange={event => setCostumeOne(event.target.value)}
            />
            E.T 
          </label>
          <br></br>
         
          </form>
      
          </div>

          <div className="word-container">
<form>
<h2>Costume</h2>  <br></br>
        <label>
          <input
            type="checkbox"
            value="fairy"
            onChange={event => setCostumeTwo(event.target.value)}
            />
            Fairy
          </label>
          <br></br>
        <label>
          <input
            type="checkbox"
            value="unicorn"
            onChange={event => setCostumeTwo(event.target.value)}
            />
            Unicorn
          </label>
          <br></br>
          <label>
          <input
            type="checkbox"
            value="mermaid"
            onChange={event => setCostumeTwo(event.target.value)}
            />
            Mermaid
          </label>
          <br></br>
          </form>
          </div>

          <div className="word-container">
<form>
<h2>Refreshment</h2>  <br></br>
        <label>
          <input
            type="checkbox"
            value="beer"
            onChange={event => setFood(event.target.value)}
            />
            Beer
          </label>
          <br></br>
        <label>
          <input
            type="checkbox"
            value="lollipops"
            onChange={event => setFood(event.target.value)}
            />
            Lollipops
          </label>
          <br></br>
          <label>
          <input
            type="checkbox"
            value="turkey wings"
            onChange={event => setFood(event.target.value)}
            />
            Turkey wings
          </label>
          <br></br>
          </form>
          </div>

          <div className="word-container">
<form>
<h2>Hustle</h2>  <br></br>
        <label>
          <input
            type="checkbox"
            value="screaming"
            onChange={event => setHustle(event.target.value)}
           
            />
            Screaming
          </label>
          <br></br>
        <label>
          <input
            type="checkbox"
            value="tickle"
            onChange={event => setHustle(event.target.value)}
          
            />
            Tickle
          </label>
          <br></br>
          <label>
          <input
            type="checkbox"
            value="dancing"
            onChange={event => setHustle(event.target.value)}
           
            />
            Dancing
          </label>
          <br></br>
          </form>
          </div>

          <div className="word-container">
<form>
<h2>Things</h2>  <br></br>
        <label>
          <input
            type="checkbox"
            value="phone numbers"
            onChange={event => setThings(event.target.value)}
            />
            Phone numbers
          </label>
          <br></br>
        <label>
          <input
            type="checkbox"
            value="coupons"
            onChange={event => setThings(event.target.value)}
            />
            Coupons
          </label>
          <br></br>
          <label>
          <input
            type="checkbox"
            value="broken code"
            onChange={event => setThings(event.target.value)}
            />
            Broken code
          </label>
          <br></br>
          </form>
          </div>


        <div className="word-container">
<form>
             <h2>Things</h2>
                {thingsTwos.map((group) => (
            <label key={group}>
                  <br></br> 
            <input
              type="checkbox"
              value={group}
              onChange={(event) => setThingsTwo(event.target.value)}
              checked={thingsTwo === group}
              />
              {group}
          </label>
      ))}
      </form>
</div>

<div className="word-container-line">
<form>
<h2>Phrase</h2>  <br></br>
        <label>What do you say when scarying kids<br></br>
          <input
            type="text"
            value="phrase"
            className="line-phrase"
            maxlength="17" 
            onChange={event => setPhrase(event.target.value)}
            value={phrase}
            />
            
          </label>
          </form>
          </div>

          </div>
          
<br></br>


<div className="mad-lib">
    <h3>The madest lib</h3>
         It´s time for 
        <input
        type="text"
        inChange={event => setHoliday(event.target.value)}
        value={holiday}
        className="line"
    
        /> and it´s 
        <input
        type="text"
        inChange={event => setNameOne(event.target.value)}
        value={nameOne}
        className="line"
        />´s favorit holiday! Last year he was
         <input
        type="text"
        inChange={event => setCostumeOne(event.target.value)}
        value={costumeOne}
        className="line"
        />. But for this year he wanted to be a 
        bit cooler so he will dress up as a 
        <input
        type="text"
        inChange={event => setCostumeTwo(event.target.value)}
        value={costumeTwo}
        className="line"
        />. 
        He hope to get alot of 
        <input
        type="text"
        inChange={event => setFood(event.target.value)}
        value={food}
        className="line"
        /> when <br></br>
        " <input
        type="text"
        inChange={event => setHustle(event.target.value)}
        value={hustle}
        className="line"
        />  or treating", and he really doesn´t want
         <input
        type="text"
        inChange={event => setThings(event.target.value)}
        value={things}
        className="line"
        /> , like last year. 
        But if so, he will throw 
        <input
        type="text"
        inChange={event => setThingsTwo(event.target.value)}
        value={thingsTwo}
        className="line"
        />  
         all over the place. No one wants to come between him and his 
        <input
        type="text"
        inChange={event => setFood(event.target.value)}
        value={food}
        className="line"
        /> , or els he will say: <br></br>
        <input
        type="text"
        inChange={event => setPhrase(event.target.value)}
        value={phrase}
        className="line-last"
        /> 
    </div>
   
    </section>

 
  );
}




const rootElement = document.getElementById("root");
ReactDOM.render(<App />, document.getElementById('root'))




