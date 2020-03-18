import React from "react";
// import { Button } from "./Button"
import { Emoji } from "./Emoji";

export const Summery = props => {
  const { name, ageGroup, animal } = props;

  return (
    <section>
      <h1><Emoji label="sun" symbol="☀️"/> Hi {name} ! You are {ageGroup} years old, look stunning today and you absolutely love {animal}! <Emoji label="heart" symbol="💚"/><Emoji label="thumbs-up" symbol="👍🏻"/> </h1>
      
      
      {/* <Button title="Do it agin!" className="secondary" /> */}

      
    </section>
  )
};