import React from "react";

export const Summary = ({ group, genre, description }) => {


  return (
    <section>
      <h1>You love: {group}!</h1>
      <h1>You love: {genre}!</h1>
      <h1>Hey {description}!</h1>
    </section>
  );
};