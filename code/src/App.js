import React, { useState } from "react";
import AllForms from "./components/forms-components/AllForms";
import Header from "components/header-components/Header";

export const App = () => {

  /* State for the FirstName component which is inside the Header component */
  /* The state, in this case, must be set outside of its own component, like it is in this case, because we need to pass the user's name into the AllForms component */
  const [nameInput, setNameInput] = useState("");

  /* Function for setting the nameInput variable with the user's name value  */
  const onNameInputChange = (e) => {
    setNameInput(e.target.value);
  };

  return (
    <>
      <Header name={nameInput} onNameInputChange={onNameInputChange} />  {/* we are passing via props the nameInput variable and also the function to the header component */}
      <AllForms name={nameInput} />  {/* we are passing via props the nameInput variable and is being used in the overview component */}
    </>
  );
};
