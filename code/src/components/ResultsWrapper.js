import React from 'react';
import { Results } from './Results'

export const ResultsWrapper = ({ region, flavor, season }) => {
  return (
    <>
      <h2>Drumroll please...</h2>
      <p>Congrats, you are</p>
      <Results region={region} flavor={flavor} season={season} />
      <p>What a snack!</p>
    </>
  )
}