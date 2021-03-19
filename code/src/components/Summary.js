import React from 'react';

// Component for the summary

export const Summary = ({name, country, travelType, satisfaction, amenities}) => {
  return (
    <section className="summary-container">
      <div className="circle"></div>
      <h1 className="summary-title" tabindex="0">Thank you {name.charAt(0).toUpperCase() + name.slice(1)}!</h1>
      <h2 className="summary-text" tabindex="0"> So you 
        <i class="fas fa-plane" title="travelled"></i><span class="sr-only">Travelled</span> 
        all the way from {country} for {travelType.toLowerCase()}. {satisfaction >= 5 ? "So glad to hear that you are satisfied with your stay and that" : "So sad to hear that you're not satisfied with your stay but at least good that "} you enjoyed our {amenities.toLowerCase()}!
      </h2>
      <button type="button" class="button restart-button" onClick={() => window.location.reload()}>SUBMIT A NEW FORM</button>
    </section>
  )
}