import React from 'react';

export const Result = (props) => {
  console.log(props.equipment)
  return (
    <section className="results">
      <h1 className="question">Summary</h1>
      <div className="result"><p>Name:</p><p className="result-user">{props.name}</p></div>
      <div className="result"><p>Mood:</p><p className="result-user">{props.mood}</p></div>
      <div className="result"><p>Difficulties:</p><p className="result-user">{props.difficulties}</p></div>
      <div className="result">
        <p>Equipments:</p>
        <ul>
          {props.equipment && Array.isArray(props.equipment) && props.equipment.map((image) => {
            return (
              <li className="result-user" key={image}>{image}</li>
            )
          })}
        </ul>
      </div>
      <div className="result"><p>Support from manager:</p><p className="result-user"> {props.support}</p></div>
    </section>
  );
}