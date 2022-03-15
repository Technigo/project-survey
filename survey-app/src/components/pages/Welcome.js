import React from "react";

import EnterButton from '../partials/EnterButton';
import clock from '../../images/clock.png';

import "../../styled-components/Pages.css"

const Welcome = ({ changePage }) => {
  return (
    <section className="welcome page">
      <div className="overlay"></div>
      <h1>Workplace Flexibility Survey</h1>
      <p>We’d love to hear your thoughts on <br />
        workplace flexibility. Care to share?</p>
      <EnterButton changePage={changePage} innerText={"Sure, let's go"} />
      <p className="time">
        <img className="icon" src={clock} alt="clock icon" />
        Takes 1 min
      </p>
    </section>

  )
}

export default Welcome;