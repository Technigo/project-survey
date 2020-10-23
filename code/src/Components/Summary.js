import React from 'react'

import BeatSaberImage from '../assets/beatsaber.jpg'
import UntilYouFallImage from '../assets/untilyoufall.png'
import SparcImage from '../assets/sparc.jpg'
import PistolWhipImage from '../assets/pistolwhip.png'
import NoMansSkyImage from '../assets/nomanssky.jpg'
import HalfLifeAlyxImage from '../assets/halflifealyx.jpg'


const startOver = () => {
  document.location.href = "";
};

const showGameImage = (game) => {
  let imageSrc; 

  switch (game) {
    case 'Beat Saber': 
      imageSrc = BeatSaberImage;
      break;
    case 'SPARC': 
      imageSrc = SparcImage;
      break;
    case 'Until you Fall': 
      imageSrc = UntilYouFallImage;
      break;
    case 'Pistol Whip': 
      imageSrc = PistolWhipImage;
      break;
    case 'No Man\'s Sky': 
      imageSrc = NoMansSkyImage;
      break;
    case 'Half-Life: Alyx': 
      imageSrc = HalfLifeAlyxImage;
      break;
  default:
    break;
  }

  return <img src={imageSrc} className= 'summary-image' alt='game beat saber'/>
}

export const Summary = ({name, snack, drink, game,}) => {

    return (
      <>
        <div>{showGameImage(game)}</div>
        <h2 tabIndex='0'> Cool {name}! I'll make sure {game} will be loading but while you wait... 
        there's some {snack} food and {drink} waiting for you!</h2>
        <button 
          type='startOver'
          tabIndex ='0'
          aria-label='Start the form again'
          onClick ={startOver}>Game over! Start Again!
        </button>

      </>
  )
};