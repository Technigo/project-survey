import React from 'react';
import Hygienist from '../images/Hygienist.png'

const YourProfessional = () => {
  return (
    <section className="summary">
      <h3>It´s submitted!</h3>
      <h4>Your dental hygienist will be</h4>
      <img className="flexible-hygienist" src={Hygienist} alt="Hygienist" />
      <h4 className="hygienist">Cecilia</h4>
    </section>
  )
}
export default YourProfessional