import React from "react";

const WelcomePage = ({ onStepChange }) => {
  return (
    <>
      <section>
        <h1>Välkommen till Citymails enkät</h1>
        <p>
          Vi jobbar ständigt för att förbättra oss och skickar därför ut en
          enkät för att ta reda på hur vi kan jobba mot nöjdare kunder. Enkäten
          tar ungefär tre minuter att svara på och svaren kan bidra till en
          bättre utdelning.
        </p>
      </section>
      <button onClick={onStepChange}>Starta</button>
    </>
  );
};

export default WelcomePage;
