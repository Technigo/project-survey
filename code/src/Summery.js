import React from "react";
// import { Button } from "./Button"
import { Emoji } from "./Emoji";

export const Summery = props => {
  const { name, ageGroup, animal } = props;

  return (
    <section className="summery">
      <Emoji label="sun" symbol="☀️"/> 
      <h1>Hi {name} !</h1>
      
      <h1>You are {ageGroup} years old, look stunning today and you absolutely love {animal}!</h1>
      <Emoji label="guinea-pig" symbol="🐹"/><Emoji label="heart" symbol="💚"/><Emoji label="thumbs-up" symbol="👍🏻"/> 
      
      
      {/* <Button title="Do it agin!" className="secondary" /> */}

      
    </section>
  )
};