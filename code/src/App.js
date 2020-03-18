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

  const ages = ["0–9 år", "10–13 år", "14–15 år", "16–18 år", "19 år och uppåt"];

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <div className="App">
      {!showSummary ? (
        <form className="formSection" id="formSection" onSubmit={handleSubmit}>
          <section className="topSection">
            <h3>Välkommen till</h3>
            <h1>Lovisas lyckoänglar</h1>

          </section>
          <section className="colorSection" id="colorSection">
            <h4> Vilken färgkombination vill du ha?</h4>
            <select className="colorSelector"
              onChange={event => setColor(event.target.value)}
              value={color}
              required>
              <option value="">Välj</option>
              <option value="rosa">rosa</option>
              <option value="rosa-röda">rosa-röda</option>
              <option value="rosa-orange">rosa-orange</option>
              <option value="rosa-lila">rosa-lila</option>
              <option value="rosa-vita">rosa-vit</option>
              <option value="orange-röda">orange-röd</option>
              <option value="orange-lila">orange-lila</option>
              <option value="orange-gula">orange-gul</option>
              <option value="gul-röda">gul-röd</option>
              <option value="gul-vita">gul-vit</option>
              <option value="vita">vit-vit</option>
              <option value="svart-vita">svart-vit</option>
              <option value="vit-gråa">vit-grå</option>
              <option value="gråa">grå-grå</option>
              <option value="svart-gråa">svart-grå</option>
            </select>
          </section>
          <section className="ageSection" id="age">
            <h4> Hur gammal är du?</h4>
            <div>{ages.map(age => (
              <label className="ageButton" key={age}>
                <input
                  type="radio"
                  name="age"
                  value={age}
                  onChange={event => setageGroup(event.target.value)}
                  checked={ageGroup === age}
                  required />
                {age}
              </label>
            ))}
            </div>
          </section>
          <section className="extraSection" id="extraSection">
            <h4>Beställ extra</h4>
            <article className="checkbox">
              <label className="ageButton">
                <input
                  type="checkbox"
                  checked={delivery1}
                  onChange={event => setDelivery1(event.target.checked)}
                />Flourescerande pärlor
              </label>
              <label className="ageButton">
                <input
                  type="checkbox"
                  checked={delivery2}
                  onChange={event => setDelivery2(event.target.checked)}
                />Strasshatt
              </label>
              <label className="ageButton">
                <input
                  type="checkbox"
                  checked={delivery3}
                  onChange={event => setDelivery3(event.target.checked)}
                />Presentförpackning
              </label>
            </article>
          </section>
          <section className="nameSection" id="nameSection">
            <label>
              <input className="textinput"
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
                placeholder="Förnamn"
                required />
            </label>
            <label>
              <input className="textinput"
                type="text"
                onChange={event => setName2(event.target.value)}
                value={name2}
                placeholder="Efternamn"
                required />
            </label>
          </section>
          <section className="buttonSection">
            <button className="submitButton" type="submit">SUBMIT</button>
          </section>
        </form>
      ) : (
          <Summary name={name} age={ageGroup} color={color} fluor={delivery1} strasshatt={delivery2} present={delivery3} />
        )}
    </div>
  );
};
