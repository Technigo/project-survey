import React, { useState } from 'react';

export const Summary = (props) => {
  return (
    <section>
      <h1>Hej {props.name}. Du har valt en {props.color} lyckoängel.
      Du är {props.age} gammal. </h1>
      {props.fluor && <p>Du har valt fluorescerande pärlor!</p>}
      {props.strasshatt && <p>Lyckoängeln har en strasshatt.</p>}
      {props.present && <p>Du har valt en fin presentförpackning</p>}

      <p>

      </p>
    </section>

  );
}

/*
fluor = { delivery1 } strasshatt = { delivery2 } present = { delivery3 }

Dina pärlor är fluorescerande. Din lyckoängel har en strasshatt. Lyckoängeln kommer levereras i en fin presentförpackning.
*/