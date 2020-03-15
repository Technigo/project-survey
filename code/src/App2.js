import React from "react";
import { Gender } from "./Gender";
import { Frequency } from "./Frequency";
import { Actions } from "./Actions";
import { Suggestions } from "./Suggestions";
import { Summary } from "./Summary";
import { Submit } from "./Submit";
import { useSignUpForm } from "./Customhooks";
import { Checkbox } from "./Test";

export const App = () => {
  return (
    <form>
      <div className='form'>
        <Gender />
        <Frequency />
        <Actions />
        <Suggestions />
        <button type='submit'>Submit</button>
        <Summary />
      </div>
    </form>
  );
};

export default App;
