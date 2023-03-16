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
  const filteredTypeArray = data.series.filter((item) => item.tvtype === type);
  console.log('filteredTypeArray:', filteredTypeArray);

  // Filtering step 2, on genre:
  const filteredGenreArray = filteredTypeArray.filter((item) => item.genres.includes(genre));
  console.log('filteredGenreArray:', filteredGenreArray);

  // Filtering step 3, on score:
  const filteredScoreArray = filteredGenreArray.filter((item) => item.score > score);
  console.log('filteredScoreArray:', filteredScoreArray);

  // Filtering step 4, on apocalypse:
  const filteredApocalypseArray = filteredScoreArray.filter((item) => item.apocalypse === apocalypse);
  console.log('filteredApocalypseArray:', filteredApocalypseArray);

  /* Gives a random number to put inside the return, change to the filtered array later */
  const i = Math.floor(Math.random() * data.series.length);
  console.log('data.series.length:', data.series.length, 'i:', i);

  return (
    <div className="container result">
      <div className="headings">
        <h2>Result <span className="emoji">🍿</span></h2>
        <hr />
      </div>
      <div className="seriestext">
        <h3>{data.series[i].name}</h3>
        <p>{data.series[i].plot}</p>
        <span>IMDB Score: {data.series[i].score} / 10</span>
        {/* Adds class "hidden" to the div if comment is empty */}
        <div className={`comments ${data.series[i].comment === '' ? 'hidden' : ''}`}>
          <h4>Comment from Matilda:</h4>
          <p>&quot;{data.series[i].comment}&quot;</p>
        </div>
      </div>
      <div className="postercontainer">
        <a href={data.series[i].url} target="_blank" rel="noreferrer"><img src={data.series[i].poster} alt="poster with link" className="posterimg" /></a>
      </div>
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