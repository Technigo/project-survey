import React from 'react';
import heart from './heart.png'
import brain from './brain.png'

export const Body = ({ body, setBody }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <section className="body">
        <h1>Which one do you think is your best body part? </h1>
        <div className="imageAndRadio">
          <div className="imageOnlyRadio">
            <img src={heart} alt="heartImg" />
            <img src={brain} alt="brainFuImg" />
          </div>
          <div className="radioOnly">
            <label>
              <input
                type="radio"
                id="Heart"
                value="Heart"
                onChange={(event) => setBody(event.target.value)}
                checked={body === 'Heart'} />
        Heart
            </label>
            <label>
              <input
                type="radio"
                id="Brain"
                value="Brain"
                onChange={(event) => setBody(event.target.value)}
                checked={body === 'Brain'} />
        Brain
            </label>
          </div>
        </div>
      </section>
    </form>
  );
}
