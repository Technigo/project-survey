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
            <h2>Tack för din feedback {nameInput}!</h2>
            <p>
              Det är viktigt för oss att utvecklas! Din feedback kommer användas
              för att förbättra vårt arbete för att få nöjdare kunder!
            </p>
            <p className="p-overview">Namn: {nameInput}</p>
            <p className="p-overview">Adress: {AdressInput}</p>
            <p className="p-overview">Typ av hus: {houseTypeInput}</p>
            <p className="p-overview">
              Jag är nöjd med utdelningen: {satisfactionInput}
            </p>
            <p className="p-overview">Varför: {satisfactionTextInput}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Overview;
