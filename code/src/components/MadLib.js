import React, { useState } from 'react'
import { Summary } from 'components/Summary'


const thing = [
    "broken code",
    "phone number",
    "coupons"
  ]
  
  
  const thingsTwos = [
    "toilet paper",
    "eggs",
    "yarn"
  ]
  
  
  export 
  const MadLib = () => {
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
        <div className="header"><h1>Time For HalloweenMad Lib</h1></div>
        <form onSubmit={handleSubmit}>
          <div className="mad-container">
  
  
  
  
            <div className="word-container">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img alt="flipBoxImage" src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                  </div>
                  <div className="flip-box-back">
  
                    <h2>Holiday</h2> 
                    <label>
                      <input
                        type="checkbox"
                        value="Christmas"
                        onChange={event => setHoliday(event.target.value)}
                        checked={holiday === "Christmas"}
  
                      />
              Christmas 
                    </label>
                
                    <label>
                      <input
                        type="checkbox"
                        value="Thanksgiving"
                        onChange={event => setHoliday(event.target.value)}
                        checked={holiday === "Thanksgiving"}
  
                      />
              Thanksgiving 
                    </label>
                   
                    <label>
                      <input
                        type="checkbox"
                        value="Halloween"
                        onChange={event => setHoliday(event.target.value)}
                        checked={holiday === "Halloween"}
  
                      />
              Halloween
            </label>
                    
  
  
                  </div>
                </div>
              </div>
  
  
            </div>
  
            <div className="word-container">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img alt="flipBoxImage" src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                  </div>
                  <div className="flip-box-back">
  
  
                    <h2>Name</h2> 
                    <label>
                      <input
                        type="checkbox"
                        value="Poya"
                        onChange={event => setNameOne(event.target.value)}
                        checked={nameOne === "Poya"}
  
                      />
              Poya
                    </label>
                    
                    <label>
                      <input
                        type="checkbox"
                        value="Maksymilian"
                        onChange={event => setNameOne(event.target.value)}
                        checked={nameOne === "Maksymilian"}
  
                      />
              Maksymilian
                    </label>
                    
                    <label>
                      <input
                        type="checkbox"
                        value="Van"
                        onChange={event => setNameOne(event.target.value)}
                        checked={nameOne === "Van"}
  
                      />
              Van
            </label>
                    
  
  
  
                  </div>
                </div>
              </div>
            </div>
            <div className="word-container">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img alt="flipBoxImage" src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                  </div>
                  <div className="flip-box-back">
  
                    <h2>Costume</h2>  
                    <label>
                      <input
                        type="checkbox"
                        value="Sponge Bob"
                        onChange={event => setCostumeOne(event.target.value)}
                        checked={costumeOne === "Sponge Bob"}
  
                      />
              Sponge Bob
                    </label>
                   
                    <label>
                      <input
                        type="checkbox"
                        value="Scooby Doo"
                        onChange={event => setCostumeOne(event.target.value)}
                        checked={costumeOne === "Scooby Doo"}
  
                      />
              Scooby Doo
                    </label>
                    
                    <label>
                      <input
                        type="checkbox"
                        value="E.T"
                        onChange={event => setCostumeOne(event.target.value)}
                        checked={costumeOne === "E.T"}
  
                      />
              E.T
            </label>
                    
  
  
  
                  </div>
                </div>
              </div>
            </div>
            <div className="word-container">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img alt="flipBoxImage" src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                  </div>
                  <div className="flip-box-back">
  
                    <h2>Costume</h2>  
                    <label>
                      <input
                        type="checkbox"
                        value="fairy"
                        onChange={event => setCostumeTwo(event.target.value)}
                        checked={costumeTwo === "fairy"}
  
                      />
              Fairy
                    </label>
                   
                    <label>
                      <input
                        type="checkbox"
                        value="unicorn"
                        onChange={event => setCostumeTwo(event.target.value)}
                        checked={costumeTwo === "unicorn"}
  
                      />
              Unicorn
                    </label>
                   
                    <label>
                      <input
                        type="checkbox"
                        value="mermaid"
                        onChange={event => setCostumeTwo(event.target.value)}
                        checked={costumeTwo === "mermaid"}
  
                      />
              Mermaid
            </label>
                    
  
                  </div>
                </div>
              </div>
            </div>
            <div className="word-container">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img alt="flipBoxImage" src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                  </div>
                  <div className="flip-box-back">
  
                    <h2>Refreshment</h2>  
                    <label>
                      <input
                        type="checkbox"
                        value="beer"
                        onChange={event => setFood(event.target.value)}
                        checked={food === "beer"}
  
                      />
              Beer
                    </label>
                    
                    <label>
                      <input
                        type="checkbox"
                        value="lollipops"
                        onChange={event => setFood(event.target.value)}
                        checked={food === "lollipops"}
  
                      />
              Lollipops
                    </label>
                   
                    <label>
                      <input
                        type="checkbox"
                        value="turkey wings"
                        onChange={event => setFood(event.target.value)}
                        checked={food === "turkey wings"}
  
                      />
              Turkey wings
            </label>
                  
  
                  </div>
                </div>
              </div>
            </div>
            <div className="word-container">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img alt="flipBoxImage" src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                  </div>
                  <div className="flip-box-back">
  
                    <h2>Hustle</h2> 
  
                    <input
                      type="checkbox"
                      name="hustle"
                      value="screaming"
                      onChange={event => setHustle(event.target.value)}
                      checked={hustle === "screaming"}
  
                    /> <label>
                      Screaming
                    </label>
                   
  
                    <input
                      type="checkbox"
                      value="tickle"
                      name="hustle"
                      onChange={event => setHustle(event.target.value)}
                      checked={hustle === "tickle"}
  
                    />   <label>
                      Tickle
                    </label>
                    
  
                    <input
                      type="checkbox"
                      value="dancing"
                      name="hustle"
                      onChange={event => setHustle(event.target.value)}
                      checked={hustle === "dancing"}
  
                    /> <label>
                      Dancing
            </label>
                   
  
                  </div>
                </div>
              </div>
            </div>
            <div className="word-container">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img alt="flipBoxImage" src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                  </div>
                  <div className="flip-box-back">
                 
            
                   <h2>Things</h2>
                      {thing.map((group) => (
                        <label key={group} className="control">
                          
                        
                          <input
                            className="control__input visually-hidden"
                            type="radio"
                            value={group}
                            onChange={(event) => setThings(event.target.value)}
                            checked={things === group}
                          /><span className="control__indicator"></span>
                          {group}
                        </label>
                      ))}
                    
                  </div>
                </div>
              </div>
            </div>
  
            <div className="word-container">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img alt="flipBoxImage" src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
                  </div>
                  <div className="flip-box-back">
  
                   
                      <h2>Things</h2>
                      {thingsTwos.map((group) => (
                        <label key={group} className="control">
                         
                        
                          <input
                            className="control__input visually-hidden"
                            type="radio"
                            value={group}
                            onChange={(event) => setThingsTwo(event.target.value)}
                            checked={thingsTwo === group}
                          /><span className="control__indicator"></span>
                          {group}
                        </label>
                      ))}
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="word-container-line">
  
              <h2>Phrase</h2>
              <label>What do you say when scarying kids
                <input
                  type="text"
                  className="line-phrase"
                  maxLength="17"
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
        
  
        {summary && (
  
          <section>
  
    
  
  <Summary
                holiday={holiday}
                nameOne={nameOne}
                costumeOne={costumeOne}
                costumeTwo={costumeTwo}
                food={food}
                hustle={hustle}
                things={things}
                thingsTwo={thingsTwo}
                food={food}
                phrase={phrase}
  />
              
  
          </section>
        )}
  
      </div>
  
  
  
    );
  }
  