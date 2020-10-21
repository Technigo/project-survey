import React, {useState} from 'react'

import { Summary } from './Summary.js'

export const Osa = () => {
  const [respond, setRespond] = useState (false);
  const [name, setName] = useState ("");
  const [song, setSong] = useState ("");
  const [food, setFood] = useState ("Vegetarian");
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
          <option value="vegetarian">Vegetarian</option>
          <option value="flexitarian">Flexitarian</option>
          <option value="allätare">Allätare</option>
        </select>
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
    {summary && <Summary name={name} respond={respond} />}
    </>
  )

}

