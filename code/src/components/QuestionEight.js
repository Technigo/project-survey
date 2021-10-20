import React, { useState } from "react";

export const QuestionEight = ({ features, featuresOthers, onFeaturesChange, onFeaturesOthersChange }) => {
  // const [values, setValues] = useState({
  //   soundQuality: false,
  //   ergonomicDesign: false,
  //   affordability: false,
  //   other: false,
  // });

  // const [userInput, setUserInput] = useState("");

  return (
    <form>
      <div>
        <h1 className="questions-main-heading">What is your favorite feature about our product?</h1>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          checked={features.soundQuality}
          onChange={(e) => {
            onFeaturesChange({
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
              soundQuality: features.soundQuality,
              ergonomicDesign: features.ergonomicDesign,
              affordability: e.target.checked,
              other: features.other,
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
              soundQuality: features.soundQuality,
              ergonomicDesign: features.ergonomicDesign,
              affordability: features.affordability,
              other: e.target.checked,
            });
          }}
        />
        Other
      </div>
      {features.other && (
        <div className="other-input">
          <input type="text" value={featuresOthers} onChange={(event) => onFeaturesOthersChange(event.target.value)} placeholder="Your custom option" />
        </div>
      )}
    </form>
  );
};
