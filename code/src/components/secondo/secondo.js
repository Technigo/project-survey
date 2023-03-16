import React from 'react';
import './secondo.css'
import cotoletta from '../../images/cotoletta.jpg'
import lamb from '../../images/lamb.jpg'
import meatballs from '../../images/meatballs.jpg'
import parmigiana from '../../images/parmigiana.jpg'

export const Secondo = ({ secondo, setSecondo }) => {
  const handleSecondoChange = (event) => {
    setSecondo(event.target.value);
  }
  return (
    <div className="Secondo-container">
      <h1>Welcome to the nonna restaurant</h1>
      <h2>Help us make a menu that suits you best!</h2>
      <p>Which Secondo do you want?</p>
      <div className="image-container-secondo">
        <img src={cotoletta} alt="cotoletta" />
        <img src={lamb} alt="lamb" />
        <img src={meatballs} alt="meatballs" />
        <img src={parmigiana} alt="parmigiana di melanzane" />
      </div>
      <form>
        <select
          onChange={handleSecondoChange}
          value={secondo}>
          <option value="" disabled>Select Secondo</option>
          <option value="cotoletta">Cotoletta</option>
          <option value="lamb">Lamb</option>
          <option value="meatballs">meatballs</option>
          <option value="parmigiana">parmigiana di melanzane</option>
        </select>
      </form>
    </div>
  )
}