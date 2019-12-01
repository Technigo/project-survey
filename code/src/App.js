import React, { useState } from "react";

export const App = () => {
  const [name, setName] = useState("");
  const [superPower, setSuperPower] = useState("");
  const [sideKick, setsideKick] = useState();
  const [range, setRange] = useState(50);
  const [showResult, setShowResult] = useState(false);
  const [section, setSection] = useState("firstQuestion");

  const sideKickQ = ["Oh yes I want one!", "No, I work alone", "Maybe later"];

  const handleSubmit = event => {
    event.preventDefault();
    setShowResult(true);
  };

  // SUMMERY------------>
  return (
    <div className="wrapper">
      {showResult && (
        <div className="summary">
          <h1>Hey {name}!</h1>
          <h4>Are you ready to save the world?</h4>
          <p>
            You go by - {name}
            <br></br>
            Your awsome superpower is - {superPower}
            <br></br>
            About sidekicks - {sideKick}
            <br></br>
            <br></br>
            You are {range} % villain.
            <br></br>
            {range > 50 && "Oh, no maybe this is a bad idea!"}
          </p>
          <button
            id="restart"
            type="button"
            onClick={() => {
              setSection("firstQuestion");
              setShowResult(false);
            }}
          >
            Restart
          </button>
        </div>
      )}

      {/* FIRST QUESTION -----> */}
      {!showResult && (
        <React.Fragment>
          <form onSubmit={handleSubmit}>
            <h1>Hello {name || "Stranger"}!</h1>
            {section === "firstQuestion" && (
              <div>
                <label htmlFor="name">
                  <h4>What's you superhero name?</h4>
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  onChange={event => setName(event.target.value)}
                  value={name}
                />
                <button
                  id="first-button"
                  type="button"
                  onClick={() => setSection("secondQuestion")}
                >
                  Continue
                </button>
              </div>
            )}

            {/* SECOND QUESTION -----> */}
            {section === "secondQuestion" && (
              <React.Fragment>
                <label htmlFor="super-power-question">
                  <h4>Choose your superpower!</h4>
                </label>
                <select
                  required
                  onChange={event => setSuperPower(event.target.value)}
                  value={superPower}
                  id="super-power-question"
                >
                  <option value="">Choose your superpower!</option>
                  <option value="Flying higher than the skies!">
                    I can fly!
                  </option>
                  <option value="Invisible">I'm invisible!</option>
                  <option value="Stronger then them all!">
                    I'm the strongest of them all!
                  </option>
                </select>
                <div>
                  <button
                    id="second-button"
                    type="button"
                    onClick={() => setSection("thirdQuestion")}
                  >
                    Continue
                  </button>
                </div>
              </React.Fragment>
            )}

            {/* THIRD QUESTION -----> */}
            {section === "thirdQuestion" && (
              <div className="side-kick">
                <h4>Do you want a sidekick?</h4>
                {sideKickQ.map(group => (
                  <label key={group}>
                    <input
                      required
                      type="radio"
                      value={group}
                      onChange={event => setsideKick(event.target.value)}
                      checked={sideKick === group}
                    />
                    <span className="fake-radio" />
                    {group}
                  </label>
                ))}
                <button
                  id="third-button"
                  type="button"
                  onClick={() => setSection("fourthQuestion")}
                >
                  Continue
                </button>
              </div>
            )}

            {/* FOURTH QUESTION -----> */}
            {section === "fourthQuestion" && (
              <React.Fragment>
                <h4>How much of a villain are you?</h4>
                <div>
                  <label className="slidecontainer">
                    <p>0%</p>
                    <input
                      required
                      type="range"
                      min="1"
                      max="100"
                      onChange={event => setRange(event.target.value)}
                      value={range}
                    />
                    <p> 100%</p>
                  </label>
                </div>
                <button type="submit">Submit</button>
              </React.Fragment>
            )}
          </form>
        </React.Fragment>
      )}
    </div>
  );
};
