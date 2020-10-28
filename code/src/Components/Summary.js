import React from "react";

const Summary = ({
  userYearofBirth,
  userGender,
  userActivities,
  userExpectation,
  userRecommendation,
  userTextInput,
}) => {
  return (
    <div className="form-summary-text">
      <p>
        Jag är en {userGender} född år {userYearofBirth}.
      </p>
      <p>Jag har deltagit i aktiviteten {userActivities}.</p>
      <p>Det kan jag {userRecommendation} rekommendera till en vän.</p>
      <p>Aktiviteten uppfyllde {userExpectation} mina förväntningar.</p>
      <p>Jag vill också skicka med er {userTextInput}.</p>
    </div>
  );
};

export default Summary;
