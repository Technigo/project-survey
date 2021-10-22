import React from "react";
import Confetti from "./Confetti";

export const Summary = ({ rootState }) => {
  return (
    <div className="main-wrapper">
      <div>
        <Confetti />
      </div>
      <div className="summary">
        <div className="thankyou-wrapper">
          <h1 className="questions-main-heading highlight">Thank you for your feedback!</h1>
          <h2 className="instructions">
            Check you inbox for a complimentary <span className="highlight">voucher</span>.
          </h2>
        </div>
        <div className="details-wrapper">
          <h3 className="instructions highlight center">Your details:</h3>
          <p className="instructions">Name:&nbsp;{rootState.name}</p>
          <p className="instructions">Email:&nbsp;{rootState.email}</p>
        </div>
        <div className="details-wrapper">
          <h3 className="instructions highlight center">Feedback summary:</h3>
          {rootState.design && <p className="instructions"> Design:&nbsp;{rootState.design}</p>}
          {rootState.variety && <p className="instructions">Variety:&nbsp;{rootState.variety} </p>}
          {rootState.quality && <p className="instructions">Quality:&nbsp;{rootState.quality} </p>}
          {rootState.deliveryTime && <p className="instructions">Delivery Time:&nbsp;{rootState.deliveryTime} </p>}
          {rootState.friendliness && <p className="instructions">Delivery Friendliness:&nbsp;{rootState.friendliness} </p>}
          {rootState.features.soundQuality && (
            <p className="instructions">
              I liked &nbsp;
              <span role="img" aria-label="tick" className="highlight tick-img">
                ☑️
              </span>
              &nbsp;Sound quality feature
            </p>
          )}
          {rootState.features.ergonomicDesign && (
            <p className="instructions">
              I liked&nbsp;
              <span role="img" aria-label="tick" className="highlight tick-img">
                ☑️
              </span>
              &nbsp;Ergonomic design feature
            </p>
          )}
          {rootState.features.affordability && (
            <p className="instructions">
              I liked&nbsp;
              <span role="img" aria-label="tick" className="highlight tick-img">
                ☑️
              </span>
              &nbsp;Affordability feature
            </p>
          )}
          {rootState.featuresOthers && <p className="instructions">Comment:&nbsp;"{rootState.featuresOthers}"</p>}
          {rootState.rating && <p className="instructions">Recommendation rating:&nbsp;{rootState.rating}</p>}
          {rootState.suggestionInput && <p className="instructions">Improvement suggestion:&nbsp;"{rootState.suggestionInput}"</p>}
        </div>
      </div>
    </div>
  );
};
