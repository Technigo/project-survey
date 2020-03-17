import React, { useState } from 'react';
import "./index.css";
import { Summary } from "./Summary";

export const App = () => {
  const [name, setName] = useState('')
  const [name2, setName2] = useState('')
  const [showSummary, setShowSummary] = useState(false)
  const [ageGroup, setageGroup] = useState('');
  const [color, setColor] = useState("");
  const [delivery1, setDelivery1] = useState(false);
  const [delivery2, setDelivery2] = useState(false);
  const [delivery3, setDelivery3] = useState(false);




  const ages = ["0–9 år", "10–13 år", "14–15 år", "16–18 år", "19 år och uppåt"]


  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (

    <div className="App">
      <section className="topSection">
        <h3>Välkommen till</h3>
        <h1>Lovisas lyckoänglar</h1>
      </section>
      <form onSubmit={handleSubmit}>

        <label>
          Namn:
        <input
            type="text"
            onChange={event => setName(event.target.value)}
            value={name}
            required
          />
        </label>
        <label>
          Efternamn:
        <input
            type="text"
            onChange={event => setName2(event.target.value)}
            value={name2}
            required
          />
        </label>

        <section>
          Din ålder
      {ages.map(age => (
          <label key={age}>
            <input
              type="radio"
              name="age"
              value={age}
              onChange={event => setageGroup(event.target.value)}
              checked={ageGroup === age}
              required
            />
            {age}
          </label>
        ))}
        </section>

        <section>
          <select
            onChange={event => setColor(event.target.value)}
            value={color}
            required
          >
            <option value="">Vilken färgkombination vill du ha?"</option>
            <option value="Rosa-rosa">Rosa-rosa</option>
            <option value="Rosa-röd">Rosa-röd</option>
            <option value="Rosa-orange">Rosa-orange</option>
            <option value="Rosa-lila">Rosa-lila</option>
            <option value="Rosa-vit">Rosa-vit</option>
            <option value="Orange-rö">Orange-röd</option>
            <option value="Orange-lila">Orange-lila</option>
            <option value="Orange-gul">Orange-gul</option>
            <option value="Gul-röd">Gul-röd</option>
            <option value="Gul-vit">Gul-vit</option>
            <option value="Vit-vit">Vit-vit</option>
            <option value="Svart-vit">Svart-vit</option>
            <option value="Vit-grå">Vit-grå</option>
            <option value="Grå-grå">Grå-grå</option>
            <option value="Svart-grå">Svart-grå</option>

          </select>
        </section>

        <section>

          <label>
            Flourescerande pärlor?
        <input
              type="checkbox"
              checked={delivery1}
              onChange={event => setDelivery1(event.target.checked)}
            />
          </label>
          <label>
            Strasshatt?
        <input
              type="checkbox"
              checked={delivery2}
              onChange={event => setDelivery2(event.target.checked)}
            />
          </label>
          <label>
            Presentförpackning?
        <input
              type="checkbox"
              checked={delivery3}
              onChange={event => setDelivery3(event.target.checked)}
            />
          </label>
        </section>

        <button type="submit">submit</button>
      </form >

      {showSummary && <Summary name={name} age={ageGroup} color={color} fluor={delivery1} strasshatt={delivery2} present={delivery3} />}

    </div>
  );
};

