import React from "react";

const Overview = ({
  nameInput,
  animalInput,
  astleyInput,
  gameInput,
  pizzaInput,
  mathInput,
}) => {
  return (
    <section className="overview-container">
      <h2>Story Time!</h2>

      <p className="overview-p">
        Once upon a time in Lala-land lived a very special person called{" "}
        {nameInput},
      </p>
      <p className="overview-p">
        {" "}
        {animalInput === "elephant"
          ? "in this upside-down land of miniature mountains and infinite puddles they lived with 100 duck-sized elephants."
          : "in this upside-down land of miniature mountains and infinite puddles they lived with their best friend who was an elephant-sized duck."}
      </p>
      <p className="overview-p">
        {" "}
        {astleyInput === "all-above"
          ? "They loved their life more than anything and would never choose to give it up, that would hurt too much and make them cry."
          : "But as it turns out they we're a bit sick of this life and honestly could not wait to give it up. Even if it meant leaving someone hurt and let down."}{" "}
      </p>
      <p className="overview-p">
        {" "}
        {gameInput === "inside"
          ? "One night as they drifted off to sleep and into the land of dreams, the world they had known was traded in for a new one. And as it turns out this was not a dream you wake from, they were trapped inside a video game."
          : "One day they woke up to find the world they had known changed forever, their favourite video game had come to life in the real world."}{" "}
      </p>
      <p className="overview-p">
        {" "}
        {pizzaInput === "yes"
          ? "In this new reality they were sent out on a very important mission - to save pizza from extinction. No one had ever loved pizza more, so they would go to any lenghts to prevent this from happening, as it turns out even eat a cricket."
          : "In this new reality pizza had become extinct beacuse someone had refused to eat a cricket to prevent it from happening and the world was not the same because of it."}{" "}
      </p>
      <p className="overview-p">
        {" "}
        {mathInput === "c"
          ? "The only way to return things to normal was by solving a seemingly impossible mathematical equation. Of course this was no match for this genious, easy peasy lemon squeezy and they lived happily ever."
          : "The only way to return things to normal was by solving a seemingly impossible mathematical equation. However this equation turned out not to be very difficult, luckily. Back to lala-land they went and lived happily ever."}{" "}
      </p>
      <p>The End.</p>
    </section>
  );
};

export default Overview;
