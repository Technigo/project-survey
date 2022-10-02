import React from 'react';

const Summary = ({answers, reset }) => {

const [first, intro, second, name, third, energy, fourth, genre, fifth, time] = answers;

  return (
    <>
    <div className= "container-summary">
    <div className ="box-summary">
      <h2 className="summary-text">Ok {name}!</h2>
      <p>Based on your answers</p>
      <p>ENERGY: {energy}</p>
      <p>GENRE: {genre}</p>
      <p>EPOKE: {time}</p>
      <p>You need some more X in your life. Click the button for my recomendation!</p>
      </div>
      <div className ="result">
      <button className="button-result">Check this out!</button>
      </div>
      </div>
      <div className="btn">
      <button className="button-refresh" onClick={reset}>Let's do it again!</button>
      </div>
      </>
  );
};


export default Summary;
/*
  { value: "A lot" },
      { value: "Just enough to keep me going" },
      { value: "Low key, something slow" },

          { value: "Pop/rock", label: "Pop/rock"}, 
      { value: "Hiphop", label: "Hiphop" }, 
      { value: "World", label: "World" }

       { value: "Contemporary", label: "Contemporary" }, 
      { value: "Oldies", label: "Oldies" }
      Just enough to keep me going
      
      */
/*
      if (energy === "A lot" && genre === Pop/rock && time === Oldies){
        <p>'link1'</p>
          } else if (energy === "A lot" && genre === Pop/rock && time === Oldies){
            <p>'link1'</p>
          } else if (energy === "A lot" && genre === Pop/rock && time === Oldies){
            <p>'link1'</p>
          } else if (x === 1 && y === 2 && z === 1){
            <p>'link3'</p>
          } else if (x === 1 && y === 2 && z === 2){
            <p>'link3'</p>
          } else if (x === 1 && y === 2 && z === 3){
            <p>'link3'</p>
          } else if (x === 1 && y === 3 && z === 1){
            <p>'link3'</p>
          } else if (x === 1 && y === 3 && z === 2){
            <p>'link3'</p>
          } else if (x === 1 && y === 3 && z === 3){
            <p>'link3'</p>

            if (x === 2 && y === 1 && z === 1){ //Första frågan svar 2
              <p>'link1'</p>
          } else if (x === 2 && y === 1 && z === 2){
            <p>'link2'</p>
          } else if (x === 2 && y === 1 && z === 3){
            <p>'link3'</p>
          } else if (x === 2 && y === 2 && z === 1){
            <p>'link3'</p>
          } else if (x === 2 && y === 2 && z === 2){
            <p>'link3'</p>
          } else if (x === 2 && y === 2 && z === 3){
            <p>'link3'</p>
          } else if (x === 2 && y === 3 && z === 1){
            <p>'link3'</p>
          } else if (x === 2 && y === 3 && z === 2){
            <p>'link3'</p>
          } else if (x === 2 && y === 3 && z === 3){
            <p>'link3'</p>

            if (x === 3 && y === 1 && z === 1){ //Första frågan svar 2
              <p>'link1'</p>
          } else if (x === 3 && y === 1 && z === 2){
            <p>'link2'</p>
          } else if (x === 3 && y === 1 && z === 3){
            <p>'link3'</p>
          } else if (x === 3 && y === 2 && z === 1){
            <p>'link3'</p>
          } else if (x === 3 && y === 2 && z === 2){
            <p>'link3'</p>
          } else if (x === 3 && y === 2 && z === 3){
            <p>'link3'</p>
          } else if (x === 3 && y === 3 && z === 1){
            <p>'link3'</p>
          } else if (x === 3 && y === 3 && z === 2){
            <p>'link3'</p>
          } else if (x === 3 && y === 3 && z === 3){
            <p>'link3'</p>
          */