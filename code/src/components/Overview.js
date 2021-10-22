import React from "react";
import Header from "./Header";

const Overview = ({
  nameInput,
  AdressInput,
  houseTypeInput,
  satisfactionInput,
  satisfactionTextInput,
}) => {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <img
          src="https://www.ehandel.se/wp-content/uploads/2020/10/citymail_fossilfritt.jpg"
          alt="Citymail bil"
          className="side-picture"
        />
        <section className="content-container">
          <div className="overview-wrapper">
            <h2>Tack för din feedback!</h2>
            <p>
              Det är viktigt för oss att utvecklas! Din feedback kommer användas
              för att förbättra vårt arbete för att få nöjdare kunder!
            </p>
            <p>Namn: {nameInput}</p>
            <p>Adress: {AdressInput}</p>
            <p>Typ av hus: {houseTypeInput}</p>
            <p>Jag är nöjd med utdelningen: {satisfactionInput}</p>
            <p>Varför: {satisfactionTextInput}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Overview;
