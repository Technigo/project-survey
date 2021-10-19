import React from "react";

import InputsForm from "./Components/InputsForm";

export const App = () => {
  return (
    <>
      <h1 className="neon-text">The most random trivia</h1>
      <section className="container-all">
        <InputsForm />
      </section>
    </>
  );
};
