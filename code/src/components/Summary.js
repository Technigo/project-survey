import React from 'react';
import ButtonNext from './ButtonNext';

const Summary = ({ name, monthType, place, range, onClickNext }) => {
  return (
    <section className="content-container">
      <div className="summary-container">
        <h1 className="header-copy">
        Houston, we had a problem.
        </h1>
        <h2 className="header-copy2">
        But after 30h of practising React it got solved!
        </h2>
        <p className="summary-paragraph">
            Thank you {name}!
            You will travel in <span className="color2">{monthType}</span>, you will experience <span className="color3">{place}</span> and you will meet {range} aliens 👽.
        </p>
      </div>
      <div className="button-container">
        <ButtonNext button="Start again" onClickNext={onClickNext} />
      </div>
      <div>
        <p className="footer-paragraph">Made By Maja Zimnoch | Image by <a href="https://www.freepik.com/free-photo/male-astronaut-exploring-night-during-space-mission-unknown-planet_21872923.htm" rel="noreferrer" target="_blank">Freepik</a> | Video by <a href="https://mixkit.co/free-stock-video/beautiful-glowing-nebula-in-space-31565/" rel="noreferrer" target="_blank">Mixkit</a>
        </p>
      </div>
    </section>

  );
};

export default Summary;