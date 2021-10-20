import React, { useState } from "react";
import MovieRecommendation from "./MovieRecommendation";

const choice = {
  scary: ["80'scary movie", "2020 scary movie"],
  action: ["Arnold Schwardznegger", "No Arnold Schwardznegger"],
  romantic: ["Richard Gere", "Matthew McConaghey"],
  documentary: ["Animals", "Politic"],
};

const MovieType = ({ genre }) => {
  const [choiceGroup, setChoiceGroup] = useState();
  const onChoiceGroupChange = (event) => setChoiceGroup(event.target.value);

  if (choiceGroup) {
    return (
      <div>
        <MovieRecommendation genre={genre} movieType={choiceGroup} />
      </div>
    );
  } else {
    return (
      <section className="hero">
        <div className="hero-content">
          <h3 className="choice">Select choice</h3>
          {choice[genre].map((group) => (
            <label className="label-style" key={group}>
              <input
                className="radio-button"
                type="radio"
                value={group}
                onChange={onChoiceGroupChange}
                checked={choiceGroup === group}
              />
              {group}
            </label>
          ))}
        </div>
      </section>
    );
  }
};
export default MovieType;
