import React from 'react';

export const Result = (props) => {
  return (
    <section className="result">
      <h1>Here is the summary of your answers:</h1>
      <p>Name: {props.name}</p>
      <p>Mood: {props.mood}</p>
      <p>Difficulties: {props.difficulties}</p>
      <p>Equipments:</p>
      <ul>
        {props.equipment && Array.isArray(props.equipment) && props.equipment.map((image) => {
          return (
            <li>{image}</li>
          )
        })}
      </ul>
      <p>Support from manager: {props.support}</p>
    </section>
  );
}