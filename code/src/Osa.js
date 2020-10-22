import React, {useState} from 'react'

import { Summary } from './Summary.js'

export const Osa = () => {
  const [respond, setRespond] = useState (false);
  const [name, setName] = useState ("");
  const [song, setSong] = useState ("");
  const [food, setFood] = useState ("Vegetariskt");
  const [drink, setDrink] = useState ("Alkohol");
  const [summary, setSummary] = useState (false);

  const handleSubmit = event => {
    event.preventDefault();
    setSummary(true);
  } 

  return (
  <>
    {!summary && ( 
    <form 
    onSubmit={handleSubmit} 
    className="osa">
      <div className="respond">
      <label>
      <h4>Ja!</h4>
        <input
          type="checkbox"
          checked={respond}
          onChange={event => setRespond(event.target.checked)}
        />
      </label>
      </div>
      <div className="name">
      <label>
        <h4>Vem är det som kommer?</h4>
        <input
          type="text"
          placeholder="Namn Efternamn"
          value={name}
          onChange={event => setName(event.target.value)}
        /> 
      </label>
      </div>
      <div className="food">
      <label>
      <h4>Och maten. Vad äter du?</h4>
        <select className="mat" value={food} onChange={(e)=>{setFood(e.target.value)}}>
          <option value="vegetariskt">Vegetariskt</option>
          <option value="flexitariskt">Flexitariskt</option>
          <option value="allt">Allt möjligt</option>
        </select>
      </label>
      </div>
      <div className="drink">
      <label>
      <h4>Alkohol</h4>
        <input 
          type="radio"
          checked={drink === "alkohol"}
          value="alkohol"
          onChange={(e)=>{setDrink(e.target.value)}}
          />
      </label>
      <label>
      <h4>Alkoholfritt</h4>
        <input 
          type="radio"
          checked={drink === "alkoholfritt"}
          value="alkoholfritt"
          onChange={(e)=>{setDrink(e.target.value)}}
          />
      </label>
      </div>
      <div className="song">
      <label>
      <h4>Önska en låt</h4>
      <p>En låt som betyder extra mycket för dig och Joakim.</p>
        <input
          type="text"
          placeholder="Artist och låt"
          value={song}
          onChange={event => setSong(event.target.value)}
        />
      </label>
      </div>
      <div className="submit">
      <button type="submit"><h4>RSPV</h4></button>
      </div>
    </form>
    )}
    {summary && 
      <Summary 
        name={name} 
        respond={respond} 
        food={food} 
        song={song} 
        drink={drink} 
      />}
  </>
  )
}

