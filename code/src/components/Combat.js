import React from 'react';
import judo from 'components/judo.png'
import KungFu from 'components/KungFu.png'

export const Combat = ({ combat, setCombat }) => {
  return (
    <form>
      <section className="combat">
        <h1> Which one do <em>you</em> think
          <br />
          is the most effective style of <mark>combat</mark>?
        </h1>
        <div className="imageAndRadio">
          <div className="imageOnlyRadio">
            <img src={judo} alt="JudoImg" />
            <img src={KungFu} alt="KungFuImg" />
          </div>
          <div className="radioOnly">
            <label htmlFor="Judo">
              <input
                type="radio"
                id="Judo"
                value="Judo"
                onChange={(event) => setCombat(event.target.value)}
                checked={combat === 'Judo'} />
        Judo
            </label>
            <label htmlFor="Kung-Fu">
              <input
                type="radio"
                id="Kung-Fu"
                value="Kung-Fu"
                onChange={(event) => setCombat(event.target.value)}
                checked={combat === 'Kung-Fu'} />
        Kung-Fu
            </label>
          </div>
        </div>
      </section>
    </form>
  );
}
