import React from 'react';

export const Result = (props) => {
  return (
    <section className="result">
      <div>Here is the summary of your answers:</div>
      <p>Name: {props.name}</p>
      <p>Mood: {props.mood}</p>
      <p>Difficulties: {props.difficulties}</p>
      <div>Equipments: {props.equipment.map((image) => {
        return (
          <img src={`images/${image}.jpg`} alt="test" />
        )
      })}
      </div>
      <p>Support from manager: {props.support}</p>
    </section>
  );
}