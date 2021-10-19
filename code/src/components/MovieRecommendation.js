import React from "react";

const choices = {
  scary: {
    "scary Arnold Schwardznegger": ["Film 1", "Film2"],
    "No Arnold Schwardznegger": ["Film 3", "Film4"],
  },
};
const MovieRecommendation = ({ genre, movieType }) => {
  return (
    <div>
      You selected {genre} and {movieType}, so here are some movies you probably
      enjoy:
      <ul>
        {choices[genre][movieType].map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieRecommendation;
