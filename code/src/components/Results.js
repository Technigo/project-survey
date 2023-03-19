import React from 'react';

const Results = ({ tasteGroup, type, texture, flavor, priceValue, textInput }) => {
  const flavorsArray = flavor.length > 2
    ? `${flavor.slice(0, -1).join(', ')} and ${flavor.slice(-1)}`
    : flavor.join(' and ');

  console.log({ textInput })
  return (
    <div className="resultsContainer">
      <p>You&apos;d like to see more <span>{tasteGroup} {texture} {type}</span> here at
        <span> LocalMart</span>, and your
      chosen flavor(s) are <span>{flavorsArray}</span>.
      </p>
      {textInput !== '' && <p>Your specific snack request is: <span>{textInput}</span></p>}
      <p>Your preferred average price is <span>{priceValue}</span>€.
      </p>
      <p>Does that sound about right to you or would you like to restart?</p>
    </div>
  );
}

export default Results;