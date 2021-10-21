import React from "react";

export const Summary = ({ rootState }) => {
  return (
    <div>
      <div className="summary">
        <div>
          <h1 className="questions-main-heading">Thank you for your feedback!</h1>
          <h2 className="instructions">Check you inbox for a complimentary voucher.</h2>
          <h3 className="instructions">Your details:</h3>
          <p>Name:{rootState.name}</p>
          <p>Email:{rootState.email}</p>
          <div>
            <h3 className="instructions">Feedback summary:</h3>
            {rootState.design && <p> Design: {rootState.design}</p>}
            {rootState.variety && <p>Variety: {rootState.variety} </p>}
            {rootState.quality && <p>Quality: {rootState.quality} </p>}
            {rootState.deliveryTime && <p>Delivery Time: {rootState.deliveryTime} </p>}
            {rootState.friendliness && <p>Delivery Friendliness: {rootState.friendliness} </p>}
            {rootState.features.soundQuality && (
              <p>
                I liked
                <span>☑️</span> Sound quality feature
              </p>
            )}
            {rootState.features.ergonomicDesign && (
              <p>
                I liked
                <span>☑️</span> Ergonomic design feature
              </p>
            )}
            {rootState.features.affordability && (
              <p>
                I liked
                <span>☑️</span> Affordability feature
              </p>
            )}
            {rootState.featuresOthers && <p>Comment: "{rootState.featuresOthers}"</p>}
            {rootState.rating && <p>Recommendation rating: {rootState.rating}</p>}
            {rootState.suggestionInput && <p>Improvement suggestion: "{rootState.suggestionInput}"</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
