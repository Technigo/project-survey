import React from 'react';

const Summary = ({ name, type, genre, data }) => {
  console.log('data:', data)
  console.log('name:', name)
  console.log('type:', type)
  console.log('genre:', genre)

  /*
  const filterSeriesArray = () => {
    const filteredSeriesArray = 'ddsds';
    console.log('data:', data)
    console.log('filteredSeriesArray:', filteredSeriesArray)
  }
  */

  // const randomizer = () => {}

  /*
  const setRandomSuggestion = () => {
    const suggestion = filteredSeriesArray[Math.floor(Math.random() * filteredSeriesArray.length)]
    console.log('series suggestion:', suggestion);
  }
  */
  const i = Math.floor(Math.random() * data.series.length);
  console.log(i);

  return (
    <div className="container result">
      <h2>Result</h2>
      <div className="series">
        <h3>{data.series[i].name}</h3>
        <p>{data.series[i].plot}</p>
        <span>IMDB Score: {data.series[i].score} / 10</span>
        <a href={data.series[i].url} target="_blank" rel="noreferrer"><img src={data.series[i].poster} alt="poster with link" className="posterimg" /></a>
      </div>
    </div>
  );
}

export default Summary;

// Find posters:
// https://www.omdbapi.com/?t=black-mirror&apikey=e170d343
// https://www.omdbapi.com/?t=chernobyl&apikey=e170d343