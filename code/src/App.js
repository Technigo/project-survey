import React from "react";
import { Agequest } from "./QuestRadio";
import { Selectanimal } from "./QuestAnimal";
import { Myname } from "QuestName";

export const App = () => {


  const handleSubmit = event => {
    event.preventDefault();
  };


  return (
    <div>
      <h1>My survey</h1>
      <form onSubmit={handleSubmit}>

      <Agequest />
      <Selectanimal />
      <Myname />





      </form>
    </div>
  );
};
