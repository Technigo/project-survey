import React from "react";

const choices = {
  scary: {
    "80'scary movie": [
      "The Shining",
      "Friday the 13",
      "A nightmare on Elm street",
      "The thing",
      "Pet Sematary",
      "Polergeist",
    ],
    "2020 scary movie": [
      "His house",
      "Host",
      "La llorona",
      "The wolf house",
      "The Mortuary",
      "Impetigore",
      "Possessor:Uncut",
    ],
  },
  romantic: {
    "Richard Gere": [
      "Pretty Woman",
      "Autum in New York",
      "Nights in Rodanthe",
      "An officer and a gentleman",
      "Runaway bride",
      "Shall we dance",
      "American Gigalo",
    ],
    "Matthew McConaghey": [
      "How to Lose a guy in 10 days ",
      "The wedding planer",
      "Failure to Launch",
      "Fool's gold",
      "Ghosts of girlfriends past",
      "EDTv",
      "Tiptoes",
    ],
  },
  action: {
    "Arnold Schwardznegger": [
      "The Terminator",
      "The Terminator 2",
      "Preditor",
      "Commando",
      "Total Recall",
      "Last Action Hero",
      "Escape Plan",
      "The Last stand",
      "Red Heat",
    ],
    "No Arnold Schwardznegger": [
      "Mad Max: Fury Road",
      "Die Hard",
      "John Wick",
      "The Matrix",
      "Black Panther",
      "Raiders of the Lost Ark",
      "The Bourne Identity",
      "Crouching Tiger, Hidden Dragon",
      "Mission: Impossible — Fallout",
    ],
  },
  documentary: {
    Nature: [
      "Planet Earth II",
      "Our Planet",
      "Blue Planet II",
      "The Hunt",
      "Life",
      "Dominion",
      "Frozen Planet",
      "Africa",
      "Life in the Undergrowth",
      "Nature's Most Amazing Events",
      "Wonders of the Universe",
      "Wild Pacific",
    ],
    Politic: [
      "The Dissident",
      "Searching for Sugar Man",
      "Det 13th",
      "An Inconvenient Truth",
      "After Porn Ends ",
      "Fahrenheit 9/11 ",
      "Bowling for Columbine",
      "Come and See ",
    ],
  },
};
const MovieRecommendation = ({ genre, movieType }) => {
  return (
    <section className="movie-time">
      <div className="hero-content">
        <h1 className="movie-text">
          You selected {genre} and {movieType}, so here are some movies you
          probably enjoy:
        </h1>
        <h2 className="movie-text"> MOVIE LIST</h2>
        <div className="list-box">
          <ul>
            {choices[genre][movieType].map((movie) => (
              <li key={movie} className="list">
                {movie}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieRecommendation;
