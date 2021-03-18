import React from 'react';

export const Summary = ({name, country, travelType, satisfaction, amenities}) => {
  return (
    <section className="summary-container">
      <div class="circle"></div>
      <h1 className="summary-title">{name},</h1>
      <h2 className="summary-text"> So you <i class="fas fa-plane"></i> all the way from {country} for {travelType.toLowerCase()}. {satisfaction >= 3 ? "So glad to hear that you are satisfied with your stay and that" : "So sad to hear that you're not satisfied with your stay but at least good that "} you enjoyed our {amenities.toLowerCase()}!
      </h2>
      <footer class="button summary-button">THANK YOU!</footer>
    </section>
  )
}