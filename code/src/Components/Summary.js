import React from 'react';


const Summary= ({ userName, transportation, active, temperature, handleStartOverClick, counter}) => {

  const tempWordToUse = () => {
    if (temperature < 5 && active === 'sporty' && transportation === 'plane') {
      return "Garmisch Partenkirchen"
    } else if (temperature < 5 && active === 'middle' && transportation === 'plane') {
      return "Svalbard"
    } else if (temperature < 5 && active === 'lazy' && transportation === 'plane') {
      return "Icehotel in Jukkasjärvi"
    } else if (temperature < 5 && transportation === 'train') {
      return "Åre"
    } else if (temperature < 5 && transportation === 'boat') {
      return "Iceland"
    }  else if (temperature > 25 && transportation === 'plane') {
      return "Barbados"
    } else if (temperature > 25 && transportation === 'train') {
      return "Turkey"
    } else if (temperature > 25 && transportation === 'boat') {
      return "Hawaii"
    } else if (transportation === 'plane') {
      return "New York"
    } else if (transportation === 'train') {
      return "Amsterdam"
    } else if (transportation === 'boat') {
      return "Scotland"
    }
  }


  const activeWordToUse = () => {
    if (temperature < 5 && active === 'sporty' && transportation === 'plane' ) {
      return "go skiing"
    } else if (temperature < 5 && active === 'middle' && transportation === 'plane') {
      return "go polar bear sightseeing"
    } else if (temperature < 5 && active === 'lazy' && transportation === 'plane') {
      return "relax with a large Irish coffee"
    } else if (temperature < 5 && active === 'sporty' && transportation === 'train') {
      return "go off-piste skiing"
    } else if (temperature < 5 && active === 'middle' && transportation === 'train') {
      return "go sledding"
    } else if (temperature < 5 && active === 'lazy' && transportation === 'train') {
      return "sit in the sauna all day long"
    } else if (temperature < 5 && active === 'sporty' && transportation === 'boat') {
      return "climb a vulcano"
    } else if (temperature < 5 && active === 'middle' && transportation === 'boat') {
      return "horseback riding"
    } else if (temperature < 5 && active === 'lazy' && transportation === 'boat') {
      return "go for a swim in the Blue Lagoon"
    } else if (temperature > 25 && active === 'sporty' && transportation === 'plane') {
      return "go scuba diving"
    } else if (temperature > 25 && active === 'middle') {
      return "go snorkeling"
    } else if (temperature > 25 && active === 'sporty' && transportation === 'train') {
      return "kite surfing in Alaçati"
    } else if (temperature > 25 && active === 'lazy' && transportation === 'train') {
      return "smoke waterpipe and eat Turkish Delights"
    } else if (temperature > 25 && active === 'sporty' && transportation === 'boat') {
      return "learn to surf at Diamond Head Honolulu"
    } else if (temperature > 25 && active === 'lazy' && transportation === 'boat') {
      return "eat pineapple at the beach"
    } else if (active === 'sporty' && transportation === 'plane') {
      return "go run the New York marathon"
    } else if (active === 'middle' && transportation === 'plane') {
      return "take a walk in Central Park"
    } else if (active === 'lazy' && transportation === 'plane') {
      return "stay in your hotel and order a large banana split"
    } else if (active === 'sporty' && transportation === 'train') {
      return "rent a bike and go sightseeing"
    } else if (active === 'middle' && transportation === 'train') {
      return "go to Rembrant museum"
    } else if (active === 'lazy' && transportation === 'train') {
      return "go Canal Cruising"
    } else if (active === 'sporty' && transportation === 'boat') {
      return "hike the Hadrian's Wall Path"
    } else if (active === 'middle' && transportation === 'boat') {
      return "explore the Edinburgh castle"
    } else {
      return "enjoy a single malt whisky and listen to live music"
    }
  }


      return (
        <>
        <div className="summaryWrapper">
        <p>Hi <span className="bold">{userName}</span>!</p>
        <p>We have put together a trip for you and recommend you to take the <span className="bold">{transportation}</span> to <span className="bold">{tempWordToUse()}</span> and <span className="bold">{activeWordToUse()}</span>. </p>
        <p>Have a nice trip!</p>
        </div>
    
  <div className='buttonWrapper'>
    <button 
    className='startOverButton'
    type="button" 
    value={counter}
    onClick={handleStartOverClick}>
    Start Over</button>
  </div>
        </>
      );
}

export default Summary;
