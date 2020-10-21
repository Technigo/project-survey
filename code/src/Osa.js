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
      <label>
        Ja!
        <input
          type="checkbox"
          checked={respond}
          onChange={event => setRespond(event.target.checked)}
        />
      </label>
      <label>
        Vem är det som kommer?
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <label>
        Mat
        <select value={food} onChange={(e)=>{setFood(e.target.value)}}>
          <option value="vegetariskt">Vegetariskt</option>
          <option value="flexitariskt">Flexitariskt</option>
          <option value="allt">Allt</option>
        </select>
      </label>
      <label>
        Alkohol
        <input 
          type="radio"
          checked={drink === "alkohol"}
          value="alkohol"
          onChange={(e)=>{setDrink(e.target.value)}}
          />
      </label>
      <label>
        Alkoholfritt
        <input 
          type="radio"
          checked={drink === "alkoholfritt"}
          value="alkoholfritt"
          onChange={(e)=>{setDrink(e.target.value)}}
          />
      </label>
      <label>
        Önska en låt
        <input
          type="text"
          value={song}
          onChange={event => setSong(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    )}
    {summary && <Summary name={name} respond={respond} food={food} song={song} drink={drink} />}
    </>
  )
}

