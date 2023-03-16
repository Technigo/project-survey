/* eslint-disable max-len */
import React from 'react';

const Summary = ({ name, type, genre, score, apocalypse, data }) => {
  console.log('---- NOW RUNNING RESULT.js')
  console.log('data:', data)
  console.log('name:', name)
  console.log('type:', type)
  console.log('genre:', genre)
  console.log('score:', score)
  console.log('apocalypse:', apocalypse)

  // Filtering step 1, on type:
  const filteredTypeArray = type === 'Surprise me!' ? data.series : data.series.filter((item) => item.tvtype === type);
  console.log('filteredTypeArray:', filteredTypeArray);

  // Filtering step 2, on genre:
  const filteredGenreArray = genre === 'Surprise' ? filteredTypeArray : filteredTypeArray.filter((item) => item.genres.includes(genre));
  console.log('filteredGenreArray:', filteredGenreArray);

  // Filtering step 3, on score:
  const filteredScoreArray = filteredGenreArray.filter((item) => item.score > score);
  console.log('filteredScoreArray:', filteredScoreArray);

  // Filtering step 4, on apocalypse:
  const filteredApocalypseArray = filteredScoreArray.filter((item) => item.apocalypse === apocalypse);
  console.log('filteredApocalypseArray:', filteredApocalypseArray);

  /* Gives a random number to put inside the return, change to the filtered array later */
  const i = Math.floor(Math.random() * filteredApocalypseArray.length);
  console.log('filteredApocalypseArray.length:', filteredApocalypseArray.length, 'i:', i);

  return (
    <div className="container result">
      <div className="headings">
        <h2>Result <span className="emoji">🍿</span></h2>
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
            <a href={filteredApocalypseArray[i].url} target="_blank" rel="noreferrer"><img src={filteredApocalypseArray[i].poster} alt="poster with link" className="posterimg" /></a>
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

// Find posters:
// https://www.omdbapi.com/?t=black-mirror&apikey=e170d343
// https://www.omdbapi.com/?t=chernobyl&apikey=e170d343

/*
  const setRandomSuggestion = () => {
    const suggestion = filteredSeriesArray[Math.floor(Math.random() * filteredSeriesArray.length)]
    console.log('series suggestion:', suggestion);
  }
  */