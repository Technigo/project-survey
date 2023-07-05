import React from 'react';

export const Summary = ({ name, continent, fitness, combat, weapon, body }) => {
  if (fitness <= 5) {
    return (
      <section className="solution">

        <p> <span> {name}</span>
          <br />
        Zombies are coming to <span> {continent}</span>.
          <br />
         With a <span> {fitness}</span>  fitness level, <u>your chances are low</u>.
          <br />
          <u>Most likely</u> you will be the first to fall and be turned into a zombie.
          <br />
         Honestly, <span> {combat}</span> skills won’t be of much help to you.
          <br />
         Keep your <u>friends</u> close and your <span> {weapon} </span> closer.
          <br />
         Look at the <mark>bright side</mark>!
          <br />
         You will spend <u>eternity</u> feasting
          <br />
         on your favourite dish - human <span> {body}</span> .
          <br />
         GOOD LUCK!
          <br />
         BONUS TIP: To <u>prepare better</u> and increase your chances of survival
          <br />
           - watch <em>Pride Prejudice and Zombies</em> daily for the next month.
        </p>

      </section>
    );
  } else {
    return (
      <section className="solution">
        <p> <span> {name}</span>
          <br />
         Zombies are coming to <span> {continent}</span>.
          <br />
         Even with a <span> {fitness}</span>  fitness level, <u>your chances are slim</u>.
          <br />
          <u>To be honest</u>, you will probably survive a couple of days <u>max</u>
          <br />
          by leveraging your <span> {combat} </span> skills.
          <br />
         Keep your <u>friends</u> close and your <span> {weapon} </span> closer.
          <br />
          Look at the <mark>bright side</mark>, when zombies do get you,
          <br />
         you will spend <u>eternity</u> feasting
          <br />
         on your favourite dish - human <span> {body}</span> .
          <br />
         GOOD LUCK!
          <br />
         BONUS TIP: To <u>prepare better</u> and increase your chances of survival
          <br />
           - watch <em>Pride Prejudice and Zombies</em> daily for the next month.
        </p>
      </section>
    );
  }
}