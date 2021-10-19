import React from "react";

import Form from "components/Form";

export const App = () => {
  return (
    <div className="survey-wrapper">
      <h1>Public adoption of Cryptocurrency</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <Form />
      </form>
    </div>
  );
};
