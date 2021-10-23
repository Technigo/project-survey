import React from "react";
import Header from "./Header";

const WelcomePage = ({ onStepChange }) => {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <img
          src="https://www.ehandel.se/wp-content/uploads/2020/10/citymail_fossilfritt.jpg"
          alt="Citymail bil"
          className="side-picture"
        />
        <div className="content-container">
          <section className="welcome-container">
            <h2>Välkommen till Citymails kundundersökning</h2>
            <p>
              Vi jobbar ständigt för att förbättra oss och skickar därför ut en
              enkät för att ta reda på hur vi kan jobba mot nöjdare kunder.
              Enkäten tar ungefär tre minuter att svara på och svaren kan bidra
              till en bättre utdelning.
            </p>
          </section>
          <button className="welcome-button" onClick={onStepChange}>
            Starta
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
