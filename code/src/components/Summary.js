import React from 'react';

export const Summary = ({ name, continent, fitness, combact, body }) => {
  if ({ fitness } <= 5) {
    return (
      <section className="solutionOne">

        <h1> {name} - THE ZOMBIES ARE COMING to {continent}. </h1>
        <h2>WILL YOU SURVIVE THE ZOMBIE APOCALYPSE?</h2>
        <p>
       With a {fitness} fitness level, your chances are low.
       Most likely you will be the first to fall and be turned into a zombie.
       Honestly, {combact} won’t be of much help to you.
        </p>

        <h3>
        Look at the bright side! You will spend eternity feasting on your fav dish - human {body}.
        </h3>
        <h1>GOOD LUCK!</h1>
        <p>
           BONUS TIP: To prepare better and increase your chances of survival
           - watch Pride Prejudice and Zombies daily for the next month.
        </p>

      </section>
    )
  } else {
    return (
      <section className="solutionOne">

        <h1> {name} - THE ZOMBIES ARE COMING to {continent}. </h1>
        <h2>WILL YOU SURVIVE THE ZOMBIE APOCALYPSE?</h2>

        <p>
       Even with a {fitness} fitness level, your chances are slim.
       To be honest, you will probably survive a couple of days max
       by leveraging your {combact} skills.
       If I were you I would start training asap.
        </p>

        <h3>
       Look at the bright side, when the zombies get you,
       you will spend eternity feasting on your fav dish - human {body}.
        </h3>
        <h1>GOOD LUCK!</h1>
        <p>
          BONUS TIP: To prepare better and increase your chances of survival
          - watch Pride Prejudice and Zombies daily for the next month.
        </p>

      </section>
    );
  }
}