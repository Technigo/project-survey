import React from "react";
import Header from "./Header";

const WelcomePage = ({ onStepChange }) => {
  return (
    <div className="content-container">
      <Header />

      <section className="welcome-container">
        <h2>Välkommen till Citymails kundundersökning</h2>
        <p>
          Vi jobbar ständigt för att förbättra oss och skickar därför ut en
          enkät för att ta reda på hur vi kan jobba mot nöjdare kunder. Enkäten
          tar ungefär tre minuter att svara på och svaren kan bidra till en
          bättre utdelning.
        </p>
      </section>
      <button onClick={onStepChange}>Starta</button>
    </div>
  );
};

export default WelcomePage;
