import React from 'react';

const Summary = ({answers, reset }) => {
  console.log('answers summary', answers)
  return (
    <section className ="container">
    <h2 className="summary-text">Ok name! Based on your answers:</h2>
      <ul className="summary">
        {answers.map((answer, i) => (
          <li className="users-choices" key={i}>{answer}</li>
        ))}
      </ul>

      <h2 className="summary-text">You need some X in your life!</h2>
      <h2>Try this out!</h2>


      <button onClick={reset}>Let's do it again!</button>
    </section>
  );
};

export default Summary;

/* if (x === 1 && y === 1 && z === 1){ //Första frågan svar 1
              <p>'link1'</p>
          } else if (x === 1 && y === 1 && z === 2){
            <p>'link2'</p>
          } else if (x === 1 && y === 1 && z === 3){
            <p>'link3'</p>
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