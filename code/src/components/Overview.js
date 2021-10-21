import React from 'react';

const Overview = ({ nameInput, plantSkill, humidity, favouritePlant }) => {
  return (
    <div className='form-container'>
      <section className='overview'>
        <h2 className='label-text'>Here is you summary</h2>
        <div className='overview-details'>
          <p>Name: {nameInput}</p>
          <p>Plant skills: {plantSkill}</p>
          <p>Indoor humidity: {humidity}</p>
          <p>Favourite plant: {favouritePlant}</p>
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
