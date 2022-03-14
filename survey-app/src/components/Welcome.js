import React from "react";

import Button from './Button';
import clock from '../images/clock.png';

const Welcome = ({ changePage }) => {
  return (
    <section className="welcome page">
      <div className="overlay"></div>
      <h1>Workplace Flexibility Survey</h1>
      <p>We’d love to hear your thoughts on <br />
        workplace flexibility. Care to share?</p>
      <Button change={changePage} innerText={"Sure, let's go"} />
      <p className="time">
        <img className="icon" src={clock} alt="clock icon" />
        Takes 1 min
      </p>
    </section>

  )
}

export default Welcome;