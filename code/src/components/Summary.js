import React from 'react';

const Summary = ({ answers, reset }) => {
  return (
    <>
      <div className="container-summary">
        <div className="box-summary">
          <h2 className="summary-text">Ok {answers[3]}!</h2>
          <p>Let&apos;s see if we can you a some nice music based on this:</p>
          <p>Energy: {answers[5]}</p>
          <p>Genre: {answers[7]}</p>
          <p>Epoke: {answers[9]}</p>
          <p>Click on the button to play the music!</p>
        </div>
        <div className="result">
          <button className="button-result" type="button">
            <a href="https://open.spotify.com/track/6EvQkav3bbrEAWRmvs6EOj?si=53475e0f4d934c8d">
              Play music
            </a>
          </button>
        </div>
      </div>
      <div className="btn">
        <button className="button-refresh" type="button" onClick={reset}>
          Reload!
        </button>
      </div>
    </>
  );
};

export default Summary;

/* On a rainy day I will add content to this project and different links depending on answers

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
