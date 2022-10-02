import React from 'react';

const Summary = ({ answers, reset }) => {
  const [first, intro, second, name, third, energy, fourth, genre, fifth, time] = answers;

  return (
    <>
      <div className="container-summary">
        <div className="box-summary">
          <h2 className="summary-text">Ok {name}!</h2>
          <p>Based on your answers</p>
          <p>Energy: {energy}</p>
          <p>Genre: {genre}</p>
          <p>Epoke: {time}</p>
          <p>Click the button for my recomendation!</p>
        </div>
        <div className="result">

          <button className="button-result" type="button"><a href="https://open.spotify.com/track/6EvQkav3bbrEAWRmvs6EOj?si=53475e0f4d934c8d">Check this out!</a></button>
        </div>

      </div>
      <div className="btn">
        <button className="button-refresh" type="button" onClick={reset}>Reload!</button>
      </div>
    </>
  );
};

export default Summary;

/* A rainy day

const result = () =>{
if (energy === "A lot" && genre === "World"){
  <p><a href = "https://open.spotify.com/track/0L6FulLhYzkSSFezo00fCK?si=60b08fdb8169464f">Blabla</a></p>
    } else if (energy === "A lot" && genre === "Rock/Blues"){
     <p><a href = "https://open.spotify.com/track/3J9cIhqTC2KQT737cFexIo?si=9d6ae6e33cf54ae9">Hurry up and wait</a></p>
    } else if (energy === "Just enough to keep me going" && genre === "World"){
     <p><a href = "https://open.spotify.com/track/7wa4m54a8B6Gsb8trZRM5n?si=b8c8de0d984448cb">Blabla</a></p>
    } else if (energy === "Just enough to keep me going" && genre === "Rock/Blues"){
     <p><a href = "https://open.spotify.com/track/3J96AfJ9a9VitkKp1sbvjR?si=c0c9b40ad6394e87">Blabla</a></p>
      } else if (energy === "Low key" && genre === "Rock/Blues"){
     <p><a href = "https://open.spotify.com/track/6STQUG57CklxDvBmrV3l0T?si=f97e485f486b4058">Little Giant</a></p>}
    else{
      <p><a href = "https://open.spotify.com/track/3UQuIAdm6oyscUbVxCn6n2?si=dccaeb9a82994755">Blabla</a></p>}

      */