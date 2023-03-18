import React from 'react';

const Results = ({ tasteGroup, type, texture, flavor, priceValue, importantValue }) => {
  const flavorsArray = flavor.length > 2
    ? `${flavor.slice(0, -1).join(', ')} and ${flavor.slice(-1)}`
    : flavor.join(' and ');
  return (
    <>
      <p>Your preference for snacks is {tasteGroup} {texture} {type}, and your
      chosen flavor(s) are {flavorsArray}.
      </p>
      <p>Your preferred average price is {priceValue}€
       and vegan options are {importantValue} to you.
      </p>
    </>
  )
}

export default Results;