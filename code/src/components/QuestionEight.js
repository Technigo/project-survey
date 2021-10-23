import React from "react";

export const QuestionEight = ({ features, featuresOthers, onFeaturesChange, onFeaturesOthersChange }) => {
  return (
    <form>
      <div>
        <h1 className="questions-main-heading">What is your favorite feature about our product?</h1>
      </div>
      <div className="form-group">
        <input
          type="checkbox"
          id="sound"
          name="sound"
          value="sound"
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
        <label className="instructions" htmlFor="sound">
          Sound quality
        </label>
      </div>
      <div className="form-group">
        <input
          id="ergonomic"
          name="ergonomic"
          value="ergonomic"
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
        <label className="instructions" htmlFor="ergonomic">
          Ergonomic design
        </label>
      </div>
      <div className="form-group">
        <input
          type="checkbox"
          id="affordability"
          name="affordability"
          value="affordability"
          checked={features.affordability}
          onChange={(e) => {
            onFeaturesChange({
              ...features,
              affordability: e.target.checked,
            });
          }}
        />
        <label className="instructions" htmlFor="affordability">
          Affordability
        </label>
      </div>
      <div className="form-group">
        <input
          type="checkbox"
          id="other"
          name="other"
          value="other"
          checked={features.other}
          onChange={(e) => {
            onFeaturesChange({
              ...features,
              other: e.target.checked,
            });
          }}
        />
        <label className="instructions" htmlFor="other">
          Other
        </label>
      </div>
      {features.other && (
        <div>
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
