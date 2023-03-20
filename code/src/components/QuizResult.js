import React from 'react';
import dogsurfer from './images/dogiesurf.png'
import shark from './images/shark.png'
import jelly from './images/jelly.png'
import crab from './images/krabba.png'
import goat from './images/goat.png'
import nakedcat from './images/nakedcat.png'
import nakeddog from './images/nakenhund.png'
import dogshark from './images/sharkdoggie.png'
import dove from './images/Duva.png'

export const QuizResult = ({ prefer, color, thing, name, setResults, results }) => {
  const quiz = () => {
    if (prefer === 'surf') {
      if (color === 'black') {
        if (thing === 'ocean') {
          return (
            <div className="Results">
              Dum dum dum dum Shark <img src={shark} alt="Shark" />
            </div>
          );
        } else if (thing === 'city') {
          return (
            <div className="Results">
              Its a dog surfing <img src={dogsurfer} alt="Dog surfing" />
            </div>
          );
        } else if (thing === 'mountain') {
          return (
            <div className="Results">
              Its a dog surfing <img src={dogsurfer} alt="Dog surfing" />
            </div>
          );
        }
      } else if (color === 'pink') {
        if (thing === 'ocean') {
          return (
            <div className="Results">
             Dont burn its a Jelly Fish <img src={jelly} alt="Pink Jelly fish" />
            </div>
          );
        } else if (thing === 'mountain') {
          return (
            <div className="Results">
              It´s a dog surfing <img src={dogsurfer} alt="Dog surfing" />
            </div>
          );
        } else if (thing === 'city') {
          return (
            <div className="Results">
             Dont burn its a Jelly Fish <img src={jelly} alt="Pink Jelly fish" />
            </div>
          );
        }
      }
    } else if (prefer === 'books') {
      if (color === 'black') {
        if (thing === 'city') {
          return (
            <div className="Results">
              Its a dog surfing <img src={dogsurfer} alt="Dog surfing" />
            </div>
          );
        } else if (thing === 'ocean') {
          return (
            <div className="Results">
             Holy moly its a dog... no a shark no a dog shark <img src={dogshark} alt="Dog dressed as a shark" />
            </div>
          );
        } else if (thing === 'mountain') {
          return (
            <div className="Results">
              Its a Goat <img src={goat} alt="Mountain Goat" />
            </div>
          );
        }
      } else if (color === 'pink') {
        if (thing === 'ocean') {
          return (
            <div className="Results">
             Dont burn its a Jelly Fish <img src={jelly} alt="Pink Jelly fish" />
            </div>
          );
        } else if (thing === 'city') {
          return (
            <div className="Results">
             Smelly cat smelly cat... <img src={nakedcat} alt="A pink naked cat" />
            </div>
          );
        } else if (thing === 'mountain') {
          return (
            <div className="Results">
             Its a himalayan salt water crab <img src={crab} alt="a pink crab" />
            </div>
          );
        }
      }
    } else if (prefer === 'people') {
      if (color === 'black') {
        if (thing === 'city') {
          return (
            <div className="Results">
              Its a dove <img src={dove} alt="A dove" />
            </div>
          );
        } else if (thing === 'ocean') {
          return (
            <div className="Results">
              Dum dum dum dum Shark <img src={shark} alt="Shark" />
            </div>
          );
        } else if (thing === 'mountain') {
          return (
            <div className="Results">
              Its a Goat <img src={goat} alt="Mountain Goat" />
            </div>
          );
        }
      } else if (color === 'pink') {
        if (thing === 'ocean') {
          return (
            <div className="Results">
              Its a dog surfing <img src={dogsurfer} alt="Dog surfing" />
            </div>
          );
        } else if (thing === 'city') {
          return (
            <div className="Results">
             Un pequeño gatito <img src={nakedcat} alt="Pink naked cat" />
            </div>
          );
        } else if (thing === 'mountain') {
          return (
            <div className="Results">
              Its a dog  <img src={nakeddog} alt="Mountain Goat" />
            </div>

          );
        }
      }
    }
  };
  const handleResults = () => {
    const calculateResult = quiz();
    setResults(calculateResult);
  };

  return (
    <div className="text">

      <p> Hey {name}, your favorite animal is: {results}</p>
      <button onClick={handleResults} type="button" className="calculate"> <span>Whats my animal?</span></button>
      <button className="playAgain" type="button" onClick={() => window.location.reload(false)}>
        <span>Play Again Please!</span>
      </button>
    </div>

  );
};
