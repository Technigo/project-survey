import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'



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
  const [summary, setSummary] = useState(false)

  const handleSubmit = event => {
    event.preventDefault();
    setSummary(true);
  };
  return (


    <div className="container">
      <div className="header"><h1>Time For Halloween<br>
      </br> Mad Lib</h1></div>
      <form onSubmit={handleSubmit}>
        <div className="mad-container">




          <div className="word-container">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                </div>
                <div class="flip-box-back">

                  <h2>Holiday</h2> <br></br>
                  <label>
                    <input
                      type="checkbox"
                      value="Christmas"
                      onChange={event => setHoliday(event.target.value)}
                      checked={holiday === "Christmas"}

                    />
            Christmas <br></br>
                  </label>
                  <br></br>
                  <label>
                    <input
                      type="checkbox"
                      value="Thanksgiving"
                      onChange={event => setHoliday(event.target.value)}
                      checked={holiday === "Thanksgiving"}

                    />
            Thanksgiving <br></br>
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


                </div>
              </div>
            </div>


          </div>

          <div className="word-container">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                </div>
                <div class="flip-box-back">


                  <h2>Name</h2>  <br></br>
                  <label>
                    <input
                      type="checkbox"
                      value="Poya"
                      onChange={event => setNameOne(event.target.value)}
                      checked={nameOne === "Poya"}

                    />
            Poya<br></br>
                  </label>
                  <br></br>
                  <label>
                    <input
                      type="checkbox"
                      value="Maksymilian"
                      onChange={event => setNameOne(event.target.value)}
                      checked={nameOne === "Maksymilian"}

                    />
            Maksymilian<br></br>
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



                </div>
              </div>
            </div>
          </div>
          <div className="word-container">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                </div>
                <div class="flip-box-back">

                  <h2>Costume</h2>  <br></br>
                  <label>
                    <input
                      type="checkbox"
                      value="Sponge Bob"
                      onChange={event => setCostumeOne(event.target.value)}
                      checked={costumeOne === "Sponge Bob"}

                    />
            Sponge Bob<br></br>
                  </label>
                  <br></br>
                  <label>
                    <input
                      type="checkbox"
                      value="Scooby Doo"
                      onChange={event => setCostumeOne(event.target.value)}
                      checked={costumeOne === "Scooby Doo"}

                    />
            Scooby Doo<br></br>
                  </label>
                  <br></br>
                  <label>
                    <input
                      type="checkbox"
                      value="E.T"
                      onChange={event => setCostumeOne(event.target.value)}
                      checked={costumeOne === "E.T"}

                    />
            E.T
          </label>
                  <br></br>



                </div>
              </div>
            </div>
          </div>
          <div className="word-container">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                </div>
                <div class="flip-box-back">

                  <h2>Costume</h2>  <br></br>
                  <label>
                    <input
                      type="checkbox"
                      value="fairy"
                      onChange={event => setCostumeTwo(event.target.value)}
                      checked={costumeTwo === "fairy"}

                    />
            Fairy<br></br>
                  </label>
                  <br></br>
                  <label>
                    <input
                      type="checkbox"
                      value="unicorn"
                      onChange={event => setCostumeTwo(event.target.value)}
                      checked={costumeTwo === "unicorn"}

                    />
            Unicorn<br></br>
                  </label>
                  <br></br>
                  <label>
                    <input
                      type="checkbox"
                      value="mermaid"
                      onChange={event => setCostumeTwo(event.target.value)}
                      checked={costumeTwo === "mermaid"}

                    />
            Mermaid
          </label>
                  <br></br>

                </div>
              </div>
            </div>
          </div>
          <div className="word-container">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                </div>
                <div class="flip-box-back">

                  <h2>Refreshment</h2>  <br></br>
                  <label>
                    <input
                      type="checkbox"
                      value="beer"
                      onChange={event => setFood(event.target.value)}
                      checked={food === "beer"}

                    />
            Beer<br></br>
                  </label>
                  <br></br>
                  <label>
                    <input
                      type="checkbox"
                      value="lollipops"
                      onChange={event => setFood(event.target.value)}
                      checked={food === "lollipops"}

                    />
            Lollipops<br></br>
                  </label>
                  <br></br>
                  <label>
                    <input
                      type="checkbox"
                      value="turkey wings"
                      onChange={event => setFood(event.target.value)}
                      checked={food === "turkey wings"}

                    />
            Turkey wings
          </label>
                  <br></br>

                </div>
              </div>
            </div>
          </div>
          <div className="word-container">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                </div>
                <div class="flip-box-back">

                  <h2>Hustle</h2>  <br></br>

                  <input
                    type="checkbox"
                    name="hustle"
                    value="screaming"
                    onChange={event => setHustle(event.target.value)}
                    checked={hustle === "screaming"}

                  /> <label>
                    Screaming<br></br>
                  </label>
                  <br></br>

                  <input
                    type="checkbox"
                    value="tickle"
                    name="hustle"
                    onChange={event => setHustle(event.target.value)}
                    checked={hustle === "tickle"}

                  />   <label>
                    Tickle<br></br>
                  </label>
                  <br></br>

                  <input
                    type="checkbox"
                    value="dancing"
                    name="hustle"
                    onChange={event => setHustle(event.target.value)}
                    checked={hustle === "dancing"}

                  /> <label>
                    Dancing
          </label>
                  <br></br>

                </div>
              </div>
            </div>
          </div>
          <div className="word-container">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                </div>
                <div class="flip-box-back">
                <label><h2>Things</h2></label>
                 <div className="drop-down">
                 
                  <select className="select" 
                  value={things} 
                  onChange={(event) => setThings(event.target.value)}>
                                   
                    <option disabled selected className="things">
                  </option>       
                    <option 
                    value="Phone numbers"
                    onChange={(event) => setThings(event.target.value)}
                    checked={things === "phone number"}>
                    Phone numbers</option>
                    <option value="Broken code"
                    onChange={(event) => setThings(event.target.value)}
                    checked={things === "Broken code"}
                    >Broken code</option>
                    <option value="Coupons"
                     onChange={(event) => setThings(event.target.value)}
                     checked={things === "Coupons"}
                     >Coupons</option>

                  </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="word-container">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                </div>
                <div class="flip-box-back">

                 
                    <h2>Things</h2>
                    {thingsTwos.map((group) => (
                      <label key={group} className="control">
                        <br></br> 
                      
                        <input
                          className="control__input visually-hidden"
                          type="radio"
                          value={group}
                          onChange={(event) => setThingsTwo(event.target.value)}
                          checked={thingsTwo === group}
                        /><span class="control__indicator"></span>
                        {group}
                      </label>
                    ))}
                
                </div>
              </div>
            </div>
          </div>
          <div className="word-container-line">

            <h2>Phrase</h2>
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

          </div>
        </div>

        <div className="button-container">
          <button type="submit">Mad Lib</button>
        </div>
      </form>
      <br></br>

      {summary && (

        <section>

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
         <select
              type="text"
              inChange={event => setThings(event.target.value)}
              value={things}
              className="line" />
              , like last year.
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
      )}

    </div>



  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, document.getElementById('root'))