import React from "react";
import { Agequest } from "./QuestRadio";
import { Selectanimal } from "./QuestAnimal";
import { Myname } from "QuestName";

export const App = () => {
  return (
    <div>
      {/* Find me in src/app.js! */}
      <Agequest />
      <Selectanimal />
      <Myname />
    </div>
  );
};
