import React from 'react';

export const QuizResult = ({ prefer, color, thing, name, setResults, results }) => {
  const quiz = () => {
    if (prefer === 'surf') {
      if (color === 'black') {
        if (thing === 'ocean') {
          return 'shark';
        } else if (thing === 'city') {
          return 'dog+shark';
        } else if (thing === 'mountain') {
          return 'dog+shark';
        }
      } else if (color === 'pink') {
        if (thing === 'ocean') {
          return 'jelly fish';
        } else if (thing === 'mountain') {
          return 'dog+surf';
        } else if (thing === 'city') {
          return 'jelly fish';
        }
      }
    } else if (prefer === 'books') {
      if (color === 'black') {
        if (thing === 'city') {
          return 'dog+surf';
        } else if (thing === 'ocean') {
          return 'shark+dog';
        } else if (thing === 'mountain') {
          return 'dog+surf';
        }
      } else if (color === 'pink') {
        if (thing === 'ocean') {
          return 'jelly fish';
        } else if (thing === 'city') {
          return 'naken katt';
        } else if (thing === 'mountain') {
          return 'pink himalayan crab';
        }
      }
    } else if (prefer === 'people') {
      if (color === 'black') {
        if (thing === 'city') {
          return 'rat';
        } else if (thing === 'ocean') {
          return 'shark';
        } else if (thing === 'mountain') {
          return 'mountain goat';
        }
      } else if (color === 'pink') {
        if (thing === 'ocean') {
          return 'surfing dog';
        } else if (thing === 'city') {
          return 'naken katt';
        } else if (thing === 'mountain') {
          return 'nakenhund';
        }
      }
    }
  };
  const handleResults = () => {
    const calculateResult = quiz();
    setResults(calculateResult);
  };

  return (
    <div className="results">
      <button onClick={handleResults} type="button">Calculate Results</button>
      <p> Hey {name}, your favorite animal is {results}</p>
    </div>
  );
};
