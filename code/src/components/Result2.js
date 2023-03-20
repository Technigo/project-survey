import React from 'react';

const Result2 = ({
  theme,
  country,
  genre,
  generalfilms
}) => {
  const filteredThemeArray = theme === 'Anything' ? generalfilms.films : generalfilms.films.filter((item) => item.themes.includes(theme));

  const filteredCountryArray = country === 'anywhere in the world' ? filteredThemeArray : filteredThemeArray.filter((item) => item.country_set === country);

  const filteredGenreArray = genre === 'Any' ? filteredCountryArray : filteredCountryArray.filter((item) => item.genres.includes(genre));

  const i = Math.floor(Math.random() * filteredGenreArray.length);

  return (
    <div className="container-result">
      <h2>Result</h2>
      <hr />
      {filteredGenreArray.length !== 0 ? (
        <div className="result-box">
          <a href={filteredGenreArray[i].url} target="_blank" rel="noreferrer"><img src={filteredGenreArray[i].poster} alt="poster with link" className="posterimg" aria-label="Poster image with link to IMDB" /></a>
          <div className="result-text">
            <h4>{filteredGenreArray[i].name}</h4>
            <div className="result-details">
              <p>Directed by {filteredGenreArray[i].director}</p>
              <p>{filteredGenreArray[i].details}</p>
            </div>
            <p className="synopsis-paragraph">{filteredGenreArray[i].synopsis}</p>
          </div>
        </div>
      ) : (
        <div className="result-nothing">
          <p>Sorry, there was no match.</p>
        </div>
      )}
    </div>
  );
}

export default Result2;