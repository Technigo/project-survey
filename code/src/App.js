import React, { useState } from "react";
import { Header } from "./components/Header";
import { InputAdditional } from "./components/InputAdditional";
import { InputType } from "components/InputType";
import { InputSubway } from "components/InputSubway";
import { InputPrice } from "components/InputPrice";
import { InputRooms } from "components/InputRooms";
import { Summary } from "components/Summary";

export const App = () => {
  // Set question state to move on to next question onSubmit
  const [question, setQuestion] = useState(0);
  // Set state of my input-components
  const [type, setType] = useState(" ");
  const [room, setRooms] = useState(" ");
  const [subway, setSubway] = useState(false);
  const [price, setPrice] = useState();
  const [additional, setAdditional] = useState("");

  // Functions to get the input from my components lifted to the App.js
  const updateTypeState = (event) => {
    setType(event.target.value);
  };
  const updateRoomState = (event) => {
    setRooms(event.target.value);
  };
  const updateSubwayState = (event) => {
    setSubway(event.target.value);
  };
  const updatePriceState = (event) => {
    setPrice(event.target.value);
  };
  const updateAdditionalState = (event) => {
    setAdditional(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setQuestion(question + 1);
  };

  return (
    <>
      <form className="form-container" onSubmit={onSubmit}>
        {question === 0 && (
          <div>
            <Header />
            <button type="submit" className="start-button">
              Start
            </button>
          </div>
        )}
        {question === 1 && <InputType onTypeChange={updateTypeState} />}
        {question === 2 && <InputRooms onRoomChange={updateRoomState} />}
        {question === 3 && (
          <InputSubway onSubwayChange={updateSubwayState} subway={subway} />
        )}
        {question === 4 && (
          <InputPrice onPriceChange={updatePriceState} price={price} />
        )}
        {question === 5 && (
          <InputAdditional onAdditionalChange={updateAdditionalState} />
        )}
        {question > 5 && (
          <Summary
            type={type}
            rooms={room}
            subway={subway}
            price={price}
            additional={additional}
          />
        )}
      </form>
    </>
  );
};
