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

  return (
    <div className="container result">
      <h2>Result</h2>
      <div className="series">
        <p>{data.series[0].name}</p>
        <p>{data.series[0].plot}</p>
        <p>IMDB Score: {data.series[0].score} / 10</p>
        <a href="{data.series[0].url}">Click here to read more about {data.series[0].name}.</a>
      </div>
    </div>
  );
}

export default Summary;