import React, { useState } from "react";

import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Dropdown } from "./components/Dropdown";
import { Radio } from "./components/Radio";
import { Text } from "./components/Text";
import { Progressbar } from "./components/Progressbar";
import { Summary } from "./components/Summary";

import { MoodArray } from "./components/MoodArray";
import { FavoritePartOfTheDayArray } from "./components/FavoritePartOfTheDayArray";
import { ShowerArray } from "./components/ShowerArray";
import { RoomArray } from "./components/Room";
import { FaithArray } from "./components/FaithArray";

import "components/app.css";

export const App = () => {
  const [question, setQuestion] = useState(-1);
  const [faith, setFaith] = useState();
  const [feeling, setFeeling] = useState("");
  const [dayPart, setDayPart] = useState("");
  const [shower, setShower] = useState("");
  const [roomChoice, setRoomChoice] = useState("");
  const [userText, setUserText] = useState();
  const [showSummary, setShowSummary] = useState(false);

  const getUserInput = (userValue, optionsArray) => {
    for (let i = 0; i < optionsArray.length; i++) {
      if (optionsArray[i].value === userValue) return optionsArray[i].text;
    }
    return "no text found";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
  };
  const nextQuestion = () => setQuestion(question + 1);
  const previousQuestion = () => setQuestion(question - 1);

  return (
    <>
      <section className="wrapper">
        <Header />
        {question === -1 && (
          <div className="introduction">
            <h2>Welcome and tell me who you are!</h2>
            <h3>This survey is all about you, who you are and how valuable you are.</h3>
            <div className="button-container">
              <Button type="button" click={nextQuestion} text="Start" />
            </div>
          </div>
        )}
        {!showSummary ? (
          <form className="survey" onSubmit={handleSubmit}>
            {question === 0 && (
              <>
                <Dropdown selectValue={feeling} setSelectValue={setFeeling} question={"How are you?"} optionsArray={MoodArray} />
                <div className="button-container">
                  <Button type="button" text="Previous" click={previousQuestion} />
                  <Button type="button" text={feeling ? "Next!" : "Make a choice!"} click={nextQuestion} disable={!feeling} />
                </div>
                <Progressbar value="15" />
              </>
            )}
            {question === 1 && (
              <>
                <Dropdown selectValue={dayPart} setSelectValue={setDayPart} question={"What is your favorite part of the day?"} optionsArray={FavoritePartOfTheDayArray} />
                <div className="button-container">
                  <Button type="button" text="Previous" click={previousQuestion} />
                  <Button type="button" text={dayPart ? "Next!" : "Make a choice!"} click={nextQuestion} disable={!dayPart} />
                </div>
                <Progressbar value="30" />
              </>
            )}
            {question === 2 && (
              <>
                <Dropdown selectValue={shower} setSelectValue={setShower} question={"How many times do you shower in a week?"} optionsArray={ShowerArray} />
                <div className="button-container">
                  <Button type="button" text="Previous" click={previousQuestion} />
                  <Button type="button" text={shower ? "Next!" : "Make a choice!"} click={nextQuestion} disable={!shower} />
                </div>
                <Progressbar value="45" />
              </>
            )}
            {question === 3 && (
              <>
                <Dropdown selectValue={roomChoice} setSelectValue={setRoomChoice} question={"What is your favorite room at your place?"} optionsArray={RoomArray} />
                <div className="button-container">
                  <Button type="button" text="Previous!" click={previousQuestion} />
                  <Button type="button" text={roomChoice ? "Next!" : "Make a choice!"} click={nextQuestion} disable={!roomChoice} />
                </div>
                <Progressbar value="60" />
              </>
            )}
            {question === 4 && (
              <>
                <Radio faith={faith} setFaith={setFaith} question={"Do you have any faith?"} radioButtonsArray={FaithArray} />
                <div className="button-container">
                  <Button type="button" text="Previous!" click={previousQuestion} />
                  <Button type="button" text={faith ? "Next!" : "Make a choice!"} click={nextQuestion} disable={!faith} />
                </div>
                <Progressbar value="75" />
              </>
            )}
            {question === 5 && (
              <>
                <Text userText={userText} setUserText={setUserText} />
                <div className="button-container">
                  <Button type="button" click={previousQuestion} text="Previous!" />
                  <Button type="submit" text={userText ? "Submit" : "Fill in your name!"} disable={!userText} />
                </div>
              </>
            )}
          </form>
        ) : (
          <>
            <Summary
              feeling={getUserInput(feeling, MoodArray)}
              dayPart={getUserInput(dayPart, FavoritePartOfTheDayArray)}
              shower={getUserInput(shower, ShowerArray)}
              roomChoice={getUserInput(roomChoice, RoomArray)}
              faith={faith}
              userMessage={userText}
            />
            <button className="reloadbutton" onClick={() => window.location.reload(false)}>
              Click to reload!
            </button>
          </>
        )}
      </section>
    </>
  );
};
