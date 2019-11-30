import { useState } from 'react'
import React from 'react'
import './app.css'


export const App = () => {

  const environElectricity = ["Ja", "Nej"]
  const environShopping = ["Ja", "Nej"]

  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [ovrigt, setOvrigt] = useState('')
  const [transport, setTransport] = useState('')
  const [useCar, setUseCar] = useState('')
  const [heating, setHeating] = useState('')
  const [knowsBetter, setKnowsBetter] = useState(false)
  const [electricity, setElectricity] = useState()
  const [shopping, setShopping] = useState()
  const [showResult, setShowResult] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault()
    setShowResult(true)
  }


  return (
    <div>
      <div className="formContainer">
        <div>
          {showResult && (
            <div className="santaAnswer">
              <h1>Bra jobbat, {name} !!!</h1>
              <h3>Du brukar ta {transport} till jobbet och använda bilen för att fixa {useCar}.
              Så bra att du kan ha det varmt och skönt hemma. Tack för att du gjorde alla frågorna!
              Hoppas du fortsätter att tänka på varifrån koldioxid kommer!
              Hälsningar
              <br />
                <span role="img" aria-label="Sunflower">🌻</span></h3>
            </div>
          )}
        </div>

        {!showResult && (
          <form onSubmit={handleSubmit}>
            <fieldset>
              <h1>Koldioxid i vardagen</h1>
              <h2>Med hjälp av de här frågorna kan du börja tänka på när koldioxid bildas.</h2>
            </fieldset>
            <section className="inputContainer">
              <fieldset>
                <input autofocus="autofocus"
                  type="text"
                  placeholder="Vad heter du?"
                  onChange={event => setName(event.target.value)}
                  value={name}
                />

                <input autofocus="autofocus"
                  type="text"
                  placeholder="Var bor du?"
                  onChange={event => setLocation(event.target.value)}
                  value={location}
                />
              </fieldset>
            </section>

            <div className="transport">
              <fieldset>
                <h2>Så här tar jag mig oftast till jobbet eller skolan:</h2>
                <label>
                  <input
                    type="radio"
                    value="cykel"
                    onChange={() => setTransport('cykel')}
                    checked={transport === 'cykel'} />
                  <span role="img" aria-label="take the bike">
                    🚲
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="bilen"
                    onChange={() => setTransport('bilen')}
                    checked={transport === 'bilen'} />
                  <span role="img" aria-label="take the car">
                    🚗
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="bussen"
                    onChange={() => setTransport('bussen')}
                    checked={transport === 'bussen'} />
                  <span role="img" aria-label="take the bus">
                    🚌
                  </span>
                </label>
              </fieldset>
            </div>

            <section>
              <fieldset>
                <h2>Bilen är ett fantastiskt transportmedel som de flesta av oss använder i vardagen. </h2>
                <h2>Jag behöver använda bilen för att: </h2>
                <select
                  onChange={event => setUseCar(event.target.value)}
                  value={useCar} >
                  <option value="">Du kan bara välja en: </option>
                  <option value="handling"> Handling </option>
                  <option value="fritidsaktiviter"> Fritidsaktiviter </option>
                  <option value="återvinning"> Återvinning </option>
                  <option value="jobbtransporter"> Jobb-transporter </option>
                  <option value="lämning barn"> Lämning av barnen på förskola eller skola </option>
                </select>
              </fieldset>
            </section>

            <section>
              <fieldset>
                <h2>I Sverige är det kallt på vintern och vi behöver energi för att få det varmt och skönt.</h2>
                <h2>Huset där jag bor värms med:</h2>
                <select
                  onChange={event => setHeating(event.target.value)}
                  value={heating} >
                  <option value=""> Du kan bara välja en: </option>
                  <option value="Fjärrvärme"> Fjärrvärme </option>
                  <option value="Värmepump"> Värmepump </option>
                  <option value="Vedeldning"> Vedeldning </option>
                  <option value="Olja"> Olja </option>
                </select>
              </fieldset>
            </section>

            <section>
              <fieldset>
                <h2>Har du tänkt på att kolla om din miljömärkta el görs utan fossila källor?</h2>
                <h2>Jag använder miljömärkt el hemma:</h2>

                {environElectricity.map(YelN => (
                  <label className="eatTime-label" key={YelN}>
                    <input
                      type="radio"
                      value={YelN}
                      onChange={event => setElectricity(event.target.value)}
                      checked={electricity === YelN}
                    />
                    <span className="styleBox" />
                    {YelN}
                  </label>
                ))}
              </fieldset>
            </section>

            <section>
              <fieldset>
                <h2>När man handlar är det bra om man använder sakerna fullt ut. Det är också bra om saker används länge, antingen av dig eller nån annan.</h2>
                <h2>Jag handlar saker och kläder på second hand:</h2>

                {environShopping.map(yN => (
                  <label key={yN}>
                    <input
                      type="radio"
                      value={yN}
                      onChange={event => setShopping(event.target.value)}
                      checked={shopping === yN}
                    />
                    <span className="styleBox" />
                    {yN}
                  </label>
                ))}
              </fieldset>
            </section>

            <section className="inputContainer">
              <fieldset>
                <h2>Beroende på var och hur du bor kan det vara riktigt enkelt att återvinna nästan allt. Mer kunskap och enklare sätt att återvinna, kan göra att vi kan återvinna mer. </h2>
                <h2>Jag återvinner inte riktigt allt ännu. Det här blir över:</h2>

                <input autofocus="autofocus"
                  type="text"
                  placeholder="Vad slängs i övrigt?"
                  onChange={event => setOvrigt(event.target.value)}
                  value={ovrigt}
                />
              </fieldset>
            </section>


            <section className="better-section">
              <fieldset>
                <h2>Frågorna som du har svarat på har alla med bildningen av koldioxid att göra. </h2>
                <h2>Jag kommer fortsätta att tänka på var koldioxid kommer i från:</h2>
                <label className="better-label">
                  <input
                    type="checkbox"
                    checked={knowsBetter}
                    onChange={event => setKnowsBetter(event.target.checked)}
                    value={name}
                  />
                  <span className="styleBox" />
                  Ja
                </label>
              </fieldset>
            </section>

            <button type="submit">
              Gå vidare i livet
            </button>
          </form>
        )}

      </div >
      <footer>
        <a className="madeBy" href="mailto:ninamansster@gmail.com"> Second React project by Nina Månsson at Technigo Frontend Bootcamp 2019
            </a>
      </footer>
    </div >
  )
}
