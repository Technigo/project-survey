import React, { useState } from "react";
import AllForms from "./components/AllForms";
import Header from "components/Header";

export const App = () => {
  /* State for the Name component which is inside the Header component*/
  /* The state must be set outside of its own component because we need to pass the info into the AllForms component */
  const [nameInput, setNameInput] = useState("");

  const onNameInputChange = (e) => {
    setNameInput(e.target.value);
  };

  return (
    <>
      <Header name={nameInput} onNameInputChange={onNameInputChange} />

      <AllForms name={nameInput} />
    </>
  );
};
