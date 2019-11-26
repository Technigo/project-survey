import React, { useState } from "react";

export const SurveyName = props => {
  const [name, setName] = useState("");
  return (
    <form onSubmit={event => event.preventDefault()}>
      <h1>Company survey</h1>
      What's the name of your company?
      <input
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
      ></input>
      <h2>{name}</h2>
    </form>
  );
};

/*  return (
    <form>
      <h1>A survey for companies</h1>
      <labels>What's the name of your company?</labels>
      <input
        type="text"
        onChange={event => setName(event.target.value)}
        value={props.name}
      ></input>
      <h2>{props.name}</h2>
    </form>
    */
