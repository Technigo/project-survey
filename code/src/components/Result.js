import React from 'react';

export const Result = (props) => {
  console.log(props.equipment)
  return (
    <section className="result">
      <h1 className="question">Summary</h1>
      <p>Name: {props.name}</p>
      <p>Mood: {props.mood}</p>
      <p>Difficulties: {props.difficulties}</p>
      <div className="equipments-result">
        <p>Equipments:</p>
        <ul>
          {props.equipment && Array.isArray(props.equipment) && props.equipment.map((image) => {
            return (
              <li key={image}>{image}</li>
            )
          })}
        </ul>
      </div>

      <p>Support from manager: {props.support}</p>
    </section>
  );
}