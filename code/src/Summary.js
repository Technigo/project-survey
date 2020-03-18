import React, { useState } from 'react';
import lyckorosa from "lyckorosa.png";

export const Summary = (props) => {
  return (
    <section className="summarySection">
      <h2>Hej {props.name}! </h2> <h5>Tack för att du har beställt en lyckoängel!</h5>
      <h5> Du har valt {props.color} pärlor.</h5>
      {props.fluor && <h5>De är fluorescerande.</h5>}
      {props.strasshatt && <h5>Lyckoängeln har en strasshatt.</h5>}
      {props.present && <h5>Den kommer i en fin presentförpackning</h5>}
      <h5>Du är {props.age}.</h5>
      <img src={lyckorosa} className="imageAngel" alt="lyckoängel"></img>
      <a className="link" href="">Tillbaka till Lovisas lyckoänglar</a>
    </section >
  );
}
