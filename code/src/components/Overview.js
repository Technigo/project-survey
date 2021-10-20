import React from "react";

const Overview = ({
  nameInput,
  AdressInput,
  houseTypeInput,
  satisfactionInput,
  satisfactionTextInput,
}) => {
  return (
    <section>
      <h2>Tack för din feedback!</h2>
      <p>
        Det är viktigt för oss att utvecklas! Din feedback kommer användas för
        att förbättra vårt arbete för att få nöjdare kunder!
      </p>
      <p>Namn: {nameInput}</p>
      <p>Adress: {AdressInput}</p>
      <p>Typ av hus: {houseTypeInput}</p>
      <p>Jag är nöjd med utdelningen: {satisfactionInput}</p>
      <p>Varför: {satisfactionTextInput}</p>
    </section>
  );
};

export default Overview;
