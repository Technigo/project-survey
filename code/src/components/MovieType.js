import React, { useState } from "react";
import MovieRecommendation from "./MovieRecommendation";

const choice = {
  scary: ["scary Arnold Schwardznegger", "No Arnold Schwardznegger"],
  action: ["Arnold Schwardznegger", "No Arnold Schwardznegger"],
  romantic: ["romatic Arnold Schwardznegger", "No Arnold Schwardznegger"],
  documentary: ["doc Arnold Schwardznegger", "No Arnold Schwardznegger"],
};

const MovieType = ({ genre }) => {
  const [choiceGroup, setChoiceGroup] = useState();
  const onChoiceGroupChange = (event) => setChoiceGroup(event.target.value);
  console.log({ genre, choiceGroup });

  if (choiceGroup) {
    return <MovieRecommendation genre={genre} movieType={choiceGroup} />;
  } else {
    return (
      <div>
        <h3>Select choice</h3>
        {choice[genre].map((group) => (
          <label key={group}>
            <input
              type="radio"
              value={group}
              onChange={onChoiceGroupChange}
              checked={choiceGroup === group}
            />
            {group}
          </label>
        ))}
      </div>
    );
  }
};
export default MovieType;
