import React, { useState } from "react";
import { Summary } from "./Summary";
import "./App.css"

export const App = () => {
  const animalsArray = ["Cat", "Dog", "Bunny", "Parrot"];
  const [gender, setGender] = useState("");
  const [name, setName] = useState();
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [originAnimal, setAnimal] = useState(" ");
  const [reason, setReason] = useState(" ");
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };
// Function that changes the showSummary state to true so that the summary is shown when submit

  return (
    <div className="App">
      <h1>Application form for animal adoption</h1>
      <hr></hr>
      {!showSummary ? (
        // The default state is that showSummary is false and therefore the form is shown
        <form className="App-form" onSubmit={handleSubmit}>
            <section>
              <label>Your name please</label>
                <input
                  type="text"
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
            </section>
            <section>
              <label>Birth date</label>
                <input
                  type="date"
                  value={date}
                  onChange={event => setDate(event.target.value)}
                />
            </section>
            <section>
              <label>Phone number</label>
                <input
                  type="number"
                  value={phone}
                  onChange={event => setPhone(event.target.value)}
                />
            </section>
            {/* Choose input type number since the browser support for the type="tel" is very low according to w3School. At least now it gives an error if you would type in letters instead. */}
            <section>
              <label>Gender</label>
              <select
                id="gender"
                onChange={event => setGender(event.target.value)}
              >
                <option value="">Select </option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Not specified">Don't want to specify</option>
              </select>
              </section>
            <section>
              What animal are you intrested in adopting?
              {animalsArray.map(animal => (
                <label key={animal}>
                  <input
                    type="radio"
                    value={animal}
                    onChange={event => setAnimal(event.target.value)}
                    checked={originAnimal === animal}
                    />
                  {animal}
                </label>
              ))}
            </section>
            {/* This section iterates the array of animals and prints out a radio button for each option */}
            <section>
              <label>
                Explain why you want to adopt an animal
              </label>
              <textarea
                type="text"
                value={reason}
                onChange={event => setReason(event.target.value)}
              />
            </section>
          <button type="submit">Apply</button>
        </form>
      ) : (
        <Summary
          name={name}
          gender={gender}
          date={date}
          phone={phone}
          animal={originAnimal}
          reason={reason}
        />
      )}
      {/* On submit - showSummary sets to true so that the summary is shown instead of the form */}
    </div>
  );
};
