import React from "react";

export const QuestionEight = ({ features, featuresOthers, onFeaturesChange, onFeaturesOthersChange }) => {
  return (
    <form className="select-container">
      <div>
        <h1 className="questions-main-heading">What is your favorite feature about our product?</h1>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          checked={features.soundQuality}
          onChange={(e) => {
            onFeaturesChange({
              // this it the initial code and below it will be a refactored version with use os spread
              soundQuality: e.target.checked,
              ergonomicDesign: features.ergonomicDesign,
              affordability: features.affordability,
              other: features.other,
            });
          }}
        />
        Sound quality
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          checked={features.ergonomicDesign}
          onChange={(e) => {
            onFeaturesChange({
              // refactored version
              ...features,
              ergonomicDesign: e.target.checked,
            });
          }}
        />
        Ergonomic design
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          id="Affordability"
          name="affordability"
          value="Affordability"
          checked={features.affordability}
          onChange={(e) => {
            onFeaturesChange({
              ...features,
              affordability: e.target.checked,
            });
          }}
        />
        Affordability
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          checked={features.other}
          onChange={(e) => {
            onFeaturesChange({
              ...features,
              other: e.target.checked,
            });
          }}
        />
        Other
      </div>
      {features.other && (
        <div className="other-input">
          <input
            className="custom-input"
            type="text"
            value={featuresOthers}
            onChange={(event) => onFeaturesOthersChange(event.target.value)}
            placeholder="Your custom option"
          />
        </div>
      )}
    </form>
  );
};
