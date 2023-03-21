/* eslint-disable max-len */
import React from 'react';

const Summary = ({ type, genre, score, apocalypse, data }) => {
  // Filtering step 1, on type:
  const filteredTypeArray = type === 'Surprise me!' ? data.series : data.series.filter((item) => item.tvtype === type);

  // Filtering step 2, on genre:
  const filteredGenreArray = genre === 'Surprise me!' ? filteredTypeArray : filteredTypeArray.filter((item) => item.genres.includes(genre));

  // Filtering step 3, on score:
  const filteredScoreArray = filteredGenreArray.filter((item) => item.score > score);

  // Filtering step 4, on apocalypse. If user has not checked the box, we keep all:
  const filteredApocalypseArray = apocalypse
    ? filteredScoreArray.filter((item) => item.apocalypse === true)
    : filteredScoreArray;

  /* Gives a random number to put inside the return */
  const i = Math.floor(Math.random() * filteredApocalypseArray.length);

  return (
    <div className="container result">
      <div className="headings">
        <h2>Result <span role="img" className="emoji" aria-label="popcorn emoji">🍿</span></h2>
        <hr />
      </div>
      {filteredApocalypseArray.length !== 0 ? (
        <>
          <div className="seriestext">
            <h3>{filteredApocalypseArray[i].name}</h3>
            <p>{filteredApocalypseArray[i].plot}</p>
            <span>IMDB Score: {filteredApocalypseArray[i].score} / 10</span>
            {/* Adds class "hidden" to the div if comment is empty */}
            <div className={`comments ${filteredApocalypseArray[i].comment === '' ? 'hidden' : ''}`}>
              <h4>Comment from Matilda:</h4>
              <p>&quot;{filteredApocalypseArray[i].comment}&quot;</p>
            </div>
          </div>
          <div className="postercontainer">
            <a href={filteredApocalypseArray[i].url} target="_blank" rel="noreferrer"><img src={filteredApocalypseArray[i].poster} alt="poster with link" className="posterimg" aria-label="Poster image with link to IMDB" /></a>
          </div>
        </>
      ) : (
        <div className="sorry">
          <p>Sorry, it looks like you were too precise in your wishes. We could not find a suggestion to accomodate your request. Please give it another go and search for something else.</p>
        </div>
      )}
    </div>
  );
}

export default Summary;
