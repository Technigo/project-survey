import React from 'react';

export const quizResult = ({ prefer, color, thing, setResults }) => {
  const handleResults = (event) => {
    setResults(event.target.value);

    console.log('Name:', event.target.value);
  }
  const quiz = () => {
    if (prefer === 'surf' && thing === 'ocean' && color === 'black') {
      return ('shark');
    } else if (prefer === 'surf' && thing === 'sand' && color === 'black') {
      return ('dog+surf');
    } else if (prefer === 'surf' && thing === 'mountain' && color === 'black') {
      return ('dog+surf');
    } else if (prefer === 'surf' && thing === 'city' && color === 'black') {
      return ('seagull');
    } else if (color === 'green' && prefer === 'surf' && thing === 'ocean') {
      return ('turtle');
    } else if (color === 'green' && prefer === 'surf' && thing === 'sand') {
      return ('turtle');
    } else if (color === 'green' && prefer === 'surf' && thing === 'mountain') {
      return ('parrot')
    } else if (color === 'green' && prefer === 'surf' && thing === 'city') {
      return ('turtle on a walk')
    } else if (color === 'pink' && prefer === 'surf' && thing === 'ocean') {
      return ('jellyFish')
    } else if (color === 'pink' && prefer === 'surf' && thing === 'sand') {
      return ('Pink sand crabs')
    } else if (color === 'pink' && prefer === 'surf' && thing === 'mountain') {
      return ('jelly fish')
    } else if (color === 'brown' && prefer === 'surf' && thing === 'city') {
      return ('jelly fish')
    } else if (color === 'brown' && prefer === 'surf' && thing === 'ocean') {
      return ('dog +picture of dog that surfs')
    } else if (color === 'brown' && prefer === 'surf' && thing === 'sand') {
      return ('Dog')
    } else if (color === 'brown' && prefer === 'surf' && thing === 'mountain') {
      return ('Dog')
    } else if (prefer === 'books' && thing === 'ocean' && color === 'black') {
      return ('shark')
    } else if (prefer === 'Books' && thing === 'mountain' && color === 'black') {
      return ('dog+surf')
    } else if (prefer === 'books' && thing === 'city' && color === 'black') {
      return ('seagull')
    } else if (color === 'green' && prefer === 'books' && thing === 'ocean') {
      return ('turtle')
    } else if (color === 'green' && prefer === 'books' && thing === 'sand') {
      return ('turtle')
    } else if (color === 'green' && prefer === 'books' && thing === 'mountain') {
      return ('parrot')
    } else if (color === 'green' && prefer === 'books' && thing === 'city') {
      return ('turtle on a walk')
    } else if (color === 'pink' && prefer === 'books' && thing === 'ocean') {
      return ('jellyFish')
    } else if (color === 'pink' && prefer === 'books' && thing === 'sand') {
      return ('Pink sand crabs')
    } else if (color === 'pink' && prefer === 'books' && thing === 'mountain') {
      return ('jelly fish')
    } else if (color === 'brown' && prefer === 'books' && thing === 'city') {
      return ('jelly fish')
    } else if (color === 'brown' && prefer === 'books' && thing === 'ocean') {
      return ('dog +picture of dog that surfs')
    } else if (color === 'brown' && prefer === 'books' && thing === 'sand') {
      return ('Dog')
    } else if (color === 'brown' && prefer === 'books' && thing === 'mountain') {
      return ('Dog')
    } else if (prefer === 'people' && thing === 'ocean' && color === 'black') {
      return ('dog + dog surf')
    } else if (prefer === 'people' && thing === 'sand' && color === 'black') {
      return ('dog+surf')
    } else if (prefer === 'people' && thing === 'city' && color === 'black') {
      return ('dog')
    } else if (color === 'green' && prefer === 'people' && thing === 'ocean') {
      return ('turtle')
    } else if (color === 'green' && prefer === 'people' && thing === 'sand') {
      return ('turtle')
    } else if (color === 'green' && prefer === 'people' && thing === 'mountain') {
      return ('parrot')
    } else if (color === 'green' && prefer === 'people' && thing === 'city') {
      return ('turtle on a walk')
    } else if (color === 'pink' && prefer === 'people' && thing === 'ocean') {
      return ('jellyFish')
    } else if (color === 'pink' && prefer === 'people' && thing === 'sand') {
      return ('Pink sand crabs')
    } else if (color === 'pink' && prefer === 'people' && thing === 'mountain') {
      return ('himalayan saltwater crab')
    } else if (color === 'brown' && prefer === 'people' && thing === 'city') {
      return ('nakenkatt')
    } else if (color === 'brown' && prefer === 'people' && thing === 'ocean') {
      return ('dog+surf');
    } else if (color === 'brown' && prefer === 'people' && thing === 'sand') {
      return ('Dog');
    } else if (color === 'brown' && prefer === 'people' && thing === 'mountain') {
      return ('Dog');
    } else if (color === 'black' && prefer === 'tents' && thing === 'ocean') {
      return ('dog+surf');
    } else if (color === 'black' && prefer === 'tents' && thing === 'sand') {
      return ('Dog');
    } else if (color === 'black' && prefer === 'tents' && thing === 'mountain') {
      return ('Mountain goat');
    } else if (color === 'black' && prefer === 'tents' && thing === 'city') {
      return ('rat');
    } else if (color === 'pink' && prefer === 'people' && thing === 'city') {
      return ('nakenkatt');
    }
  }
  quiz();
  return (
    <div>
      <button onClick={handleResults} type="button">Calculate Results</button>
      <p>Results: {quiz}</p>
    </div>
  );
}
