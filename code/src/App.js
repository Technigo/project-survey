import React from "react";
import { useState } from "react";

import BeyonceInput from "./Components/BeyonceInput";
import IdDropdown from "./Components/IdDropdown";
import RadioButton from "./Components/RadioButton";
import HangoutDropdown from "./Components/HangoutDropdown";
import Summary from "./Components/Summary";
import Header from "./Components/Header";

import "./index.css";

export const App = () => {
  // Selecting the next section state
  const [section, setSection] = useState("welcome");
  // Beyonce state
  const [adjective, setBeyonce] = useState("");
  // Identify state
  const [identify, setIdentify] = useState("");
  // Coffee group state
  const [coffeeGroup, setCoffeeGroup] = useState("");
  // Hang out state
  const [hangout, setHangout] = useState("");

  // Functions of getting the input

  const onBeyonceChange = (e) => {
    setBeyonce(e.target.value);
  };

  const onIdentifyChange = (e) => {
    setIdentify(e.target.value);
  };

  const onCoffeeChange = (e) => {
    setCoffeeGroup(e.target.value);
  };

  const onHangoutChange = (e) => {
    setHangout(e.target.value);
  };

  return (
    <>
      {/* Welcome section */}
      <div className="card">
        {section === "welcome" && (
          <div aria-label="Welcome" className="welcome">
            <Header />
            <button
              className="start-btn"
              onClick={() => {
                setSection("beyonce-input");
              }}
            >
              Start
            </button>
          </div>
        )}

        {/* Beyonce Section */}
        {section === "beyonce-input" && (
          <section aria-label="Beyonce input" className="beyonce-input">
            <BeyonceInput
              name={adjective}
              setBeyonce={setBeyonce}
              id="adjective"
              onBeyonceChange={onBeyonceChange}
            />
            <div className="button-wrapper">
              <button
                className="back-button"
                type="button"
                value="welcome"
                onClick={(event) => {
                  setSection(event.target.value);
                }}
              >
                Back
              </button>
              <button
                className="next-button"
                type="submit"
                value="identify"
                onClick={(event) => {
                  setSection(event.target.value);
                }}
              >
                Next
              </button>
            </div>
          </section>
        )}

        {/* Identify section */}
        {section === "identify" && (
          <section aria-label="Identify dropdown" className="identify">
            <IdDropdown
              identify={identify}
              label={adjective}
              onIdentifyChange={onIdentifyChange}
            />

            <div className="button-wrapper">
              <button
                type="button"
                value="beyonce-input"
                onClick={(event) => {
                  setSection(event.target.value);
                }}
                className="back-button"
              >
                Back
              </button>
              <button
                type="submit"
                value="coffee"
                onClick={(event) => {
                  setSection(event.target.value);
                }}
                className="next-button"
              >
                Next
              </button>
            </div>
          </section>
        )}

        {/* Coffee section */}
        {section === "coffee" && (
          <section aria-label="Coffee select" className="radio-coffee">
            <RadioButton
              coffeeGroup={coffeeGroup}
              onCoffeeChange={onCoffeeChange}
            />

            <div className="button-wrapper">
              <button
                type="button"
                value="identify"
                onClick={(event) => {
                  setSection(event.target.value);
                }}
                className="back-button"
              >
                Back
              </button>
              <button
                type="submit"
                value="hangout"
                onClick={(event) => {
                  setSection(event.target.value);
                }}
                className="next-button"
              >
                Next
              </button>
            </div>
          </section>
        )}

        {/* Hangout section */}
        {section === "hangout" && (
          <section aria-label="Hangout dropdown" className="hangout">
            <HangoutDropdown
              hangout={hangout}
              onHangoutChange={onHangoutChange}
            />

            <div className="button-wrapper">
              <button
                type="button"
                value="coffee"
                onClick={(event) => {
                  setSection(event.target.value);
                }}
                className="back-button"
              >
                Back
              </button>
              <button
                className="submit-button"
                value="summary"
                onClick={(event) => {
                  setSection(event.target.value);
                }}
              >
                Submit
              </button>
            </div>
          </section>
        )}

        {/* Summury */}
        {section === "summary" && (
          <section aria-label="Summary">
            <Summary
              adjective={adjective}
              identify={identify}
              coffeeGroup={coffeeGroup}
              hangout={hangout}
            />
          </section>
        )}
      </div>
    </>
  );
};
