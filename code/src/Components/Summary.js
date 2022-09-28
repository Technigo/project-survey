import React from 'react';

export const Summary= ({ userName, transportation, active, temperature }) => {
      return (
        <>
        <div className="questionWrapper">
        <div className="inputWrapper">
        <p> Hello {userName} We would recomand you to take the {transportation} to {temperature} and {active} </p>
        </div>
        </div>
        </>
      );
}

