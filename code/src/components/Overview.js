import React from 'react';

const plantAmount = {
  1: 'should really get yorself a plant',
  2: 'have a decent amount of plants',
  3: 'are living in a djungle!',
};

const Overview = ({
  nameInput,
  plantSkill,
  humidity,
  favouritePlant,
  sliderInput,
}) => {
  return (
    <div className='form-container'>
      <section className='overview'>
        <h2>Summary</h2>
        <div className='overview-details'>
          <p>Name: {nameInput}</p>
          <p>Plant skills: {plantSkill}</p>
          <p>Indoor humidity: {humidity}</p>
          <p>Favourite plant: {favouritePlant}</p>
          <p>You {plantAmount[sliderInput]}</p>
        </div>
        <form>
          <button className='start-button' type='submit'>
            Restart
          </button>
        </form>
      </section>
    </div>
  );
};

export default Overview;
