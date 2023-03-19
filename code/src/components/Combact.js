import React from 'react';
import judo from 'components/judo.png'
import KungFu from 'components/KungFu.png'

export const Combact = ({ combact, setCombact }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <section className="combact">
        <h1> Which do you think is the most effective form of combat? </h1>
        <div className="imageAndRadio">
          <div className="imageOnlyRadio">
            <img src={judo} alt="JudoImg" />
            <img src={KungFu} alt="KungFuImg" />
          </div>
          <div className="radioOnly">
            <label>
              <input
                type="radio"
                id="Judo"
                value="Judo"
                onChange={(event) => setCombact(event.target.value)}
                checked={combact === 'Judo'} />
        Judo
            </label>
            <label>
              <input
                type="radio"
                id="Kung-Fu"
                value="Kung-Fu"
                onChange={(event) => setCombact(event.target.value)}
                checked={combact === 'Kung-Fu'} />
        Kung-Fu
            </label>
          </div>
        </div>
      </section>
    </form>
  );
}
