import React, { useState } from "react";
import "./index.css";
import { Summary } from "Summary";

export const App = () => {
  const sizeComp = ["0-10 people", "10-50 people", "50+ people"];

  const allBenefits = ["Car", "Training-time", "Insurance"];

  const [name, setName] = useState("");
  const [size, setSize] = useState();
  const [city, setCity] = useState();
  const [benefits, setBenefits] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [question, setQuestion] = useState("name");

  const handleSubmit = event => {
    event.preventDefault();
    setAnswer(true);
  };

  const handleContinueClick = () => {
    if (question === "name") {
      setQuestion("city");
    } else if (question === "city") {
      setQuestion("benefits");
    } else if (question === "benefits") {
      setQuestion("size");
    }
  };

  return (
    <div className="mainContainer">
      {answer && (
        <Summary name={name} size={size} city={city} benefits={benefits} />
      )}

      {!answer && (
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            {question === "name" && (
              <div className="inputContainer">
                <h3>Welcome! </h3>
                <div className="welcomeContainer">
                  <p className="welcomeNote">
                    I would like to know more about your company.
                  </p>
                  <p className="welcomeNote">
                    Please answer the questions in my survey!
                  </p>
                </div>
                <label>
                  What's the name of your company?
                  <br />
                  <input
                    type="text"
                    onChange={event => setName(event.target.value)}
                    value={name}
                  ></input>{" "}
                </label>
              </div>
            )}
            <br />

            {question === "city" && (
              <div className="inputContainer">
                <label>
                  Where is your company located?
                  <br />
                  <select
                    onChange={event => setCity(event.target.value)}
                    value={city}
                  >
                    <option value="">Select location</option>
                    <option value="City">City</option>
                    <option value="Norrmalm">Norrmalm</option>
                    <option value="Södermalm">Södermalm</option>
                    <option value="Östermalm">Östermalm</option>
                    <option value="other city">Other city</option>
                  </select>
                </label>
                <br />
              </div>
            )}

            {question === "benefits" && (
              <div className="inputContainer">
                What company benefits do you have for your employees?
                <br />
                {allBenefits.map(item => (
                  <label key={item}>
                    <input
                      type="checkbox"
                      value={item}
                      onChange={event => setBenefits(event.target.value)}
                      checked={benefits === item}
                    ></input>
                    {item}
                  </label>
                ))}
              </div>
            )}

            {question === "size" && (
              <div className="inputContainer">
                <label>How big is your company?</label>
                <br />
                {sizeComp.map(group => (
                  <label className="radioLabel" key={group}>
                    <input
                      type="radio"
                      value={group}
                      onChange={event => setSize(event.target.value)}
                      checked={size === group}
                    ></input>
                    {group}
                  </label>
                ))}{" "}
                <br />
                <div className="buttonContainer">
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}

            {question !== "size" && (
              <div className="buttonContainer">
                <button type="button" onClick={handleContinueClick}>
                  Continue
                </button>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};
