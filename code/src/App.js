import React, { useState } from "react";

import "./app.css";
import { NameQuestion } from "./components/NameQuestion";
import { RadioBtnOption } from "./components/RadioBtnOption";
import { StoreQuestion } from "./components/StoreQuestion";
import { Summary } from "./components/Summary";
import { Footer } from "./components/Footer";

// THIS IS THE PARENT ALL STATES ARE SET HERE

export const App = () => {
  const [name, setName] = useState("");
  const [likeOption, setLikeOption] = useState();
  const [whereBuy, setwhereBuy] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  // CONVENTION TO STICK TO WHAT SHOULD BE UPPDATED, AND THE ACTION, EXECUTE SET NAME WITH NEW NAME.

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handlelikeOptionChange = (likeCheese) => {
    setLikeOption(likeCheese);
  };

  const handleWhereBuyChange = (newWhereBuy) => {
    setwhereBuy(newWhereBuy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <div className="App">
      {!showSummary && (
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Say cheese!</h1>
          </div>

          <NameQuestion username={name} onNameChange={handleNameChange} />

          <RadioBtnOption
            checked={likeOption}
            onlikeOptionChange={handlelikeOptionChange}
          />

          <StoreQuestion
            value={whereBuy}
            onWhereBuyChange={handleWhereBuyChange}
          />

          <button type="Submit">Submit</button>
        </form>
      )}

      {showSummary && (
        <Summary name={name} checked={likeOption} value={whereBuy} />
      )}

      <Footer />
    </div>
  );
};
