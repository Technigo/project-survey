import React from 'react';

export const Result = ({ name, kilo, reps }) => {
  const resultEpley = (kilo * (1 + reps / 30));
  const resultBrzycki = (kilo * (36 / (37 - reps)));
  const resultBaechle = (kilo * (1 + 0.033 * reps));
  const oneRepMax = (resultEpley + resultBrzycki + resultBaechle) / 3;
  console.log(oneRepMax);
  return (
    <>
      <div className="one-rep-max-container">
        <p className="one-rep-max-name">{`${name}'s`}</p>
        <p className="one-rep-max-text">Bench Press Max</p>
        <p className="one-rep-max-kg">{Math.round(oneRepMax)} kg</p>
      </div>
      <div className="reps-and-worksets-combo">
        <div className="one-rep-max-reps-container">
          <p className="one-rep-max-reps">2 reps</p>
          <p className="one-rep-max-reps">3 reps</p>
          <p className="one-rep-max-reps">4 reps</p>
          <p className="one-rep-max-reps">5 reps</p>
          <p className="one-rep-max-reps">6 reps</p>
          <p className="one-rep-max-reps">7 reps</p>
          <p className="one-rep-max-reps">8 reps</p>
          <p className="one-rep-max-reps">9 reps</p>
          <p className="one-rep-max-reps">10 reps</p>
          <p className="one-rep-max-reps">11 reps</p>
          <p className="one-rep-max-reps">12 reps</p>
        </div>
        <div className="one-rep-max-workset-container">
          <p className="one-rep-max-reps">{Math.round(oneRepMax * 0.97)} kg</p>
          <p className="one-rep-max-reps">{Math.round(oneRepMax * 0.94)} kg</p>
          <p className="one-rep-max-reps">{Math.round(oneRepMax * 0.91)} kg</p>
          <p className="one-rep-max-reps">{Math.round(oneRepMax * 0.88)} kg</p>
          <p className="one-rep-max-reps">{Math.round(oneRepMax * 0.86)} kg</p>
          <p className="one-rep-max-reps">{Math.round(oneRepMax * 0.83)} kg</p>
          <p className="one-rep-max-reps">{Math.round(oneRepMax * 0.81)} kg</p>
          <p className="one-rep-max-reps">{Math.round(oneRepMax * 0.79)} kg</p>
          <p className="one-rep-max-reps">{Math.round(oneRepMax * 0.77)} kg</p>
          <p className="one-rep-max-reps">{Math.round(oneRepMax * 0.75)} kg</p>
          <p className="one-rep-max-reps">{Math.round(oneRepMax * 0.73)} kg</p>

        </div>
      </div>
      <div className="close_button_container">
        <button type="button" className="close_button" onClick={() => window.location.reload()}>X</button>
      </div>
    </>
  );
};
