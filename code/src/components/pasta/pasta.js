import React from 'react';
import './pasta.css'
import gnocchi from '../../images/gnocchi al pesto.jpg'
import seafood from '../../images/seafood pasta.jpg'
import spaghetti from '../../images/spaghetti al sugo.jpg'

export const Pasta = ({ pasta, setPasta }) => {
  const handlePastaChange = (event) => {
    setPasta(event.target.value);
  }
  return (
    <div className="Pasta-container">
      <h1>Welcome to the nonna restaurant</h1>
      <h2>Help us make a menu that suits you best!</h2>
      <p>Which pasta do you want?</p>
      <div className="image-container-pasta">
        <img src={gnocchi} alt="gnocchi al pesto" />
        <img src={seafood} alt="seafood pasta" />
        <img src={spaghetti} alt="spaghetti al sugo" />
      </div>
      <form>
        <select
          onChange={handlePastaChange}
          value={pasta}>
          <option value="" disabled>Select Pasta</option>
          <option value="gnocchi">Gnocchi al pesto</option>
          <option value="seafood">Seafood pasta</option>
          <option value="spaghetti">Spaghetti al sugo</option>
        </select>
      </form>
    </div>
  )
}