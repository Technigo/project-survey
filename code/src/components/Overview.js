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
          ? "in this upside-down land of miniature mountains, infinite puddles they lives with their 100 tiny pet elephants."
          : "in this upside-down land of miniature mountains and infinite puddles they lived with their pet duck, but this eas no ordinairy duck, it was the biggest duck you had ever seen. It was as big as an elephant."}
      </p>
      <p className="overview-p">
        {" "}
        {astleyInput === "all-above"
          ? "and they would never give them up, let them down, make them cry or hurt them."
          : "and they would never give them up, let them down, make them cry or hurt them."}{" "}
      </p>
      <p className="overview-p">
        {" "}
        {gameInput === "inside"
          ? "But one night as they drifted off to sleep and into the land of dreams, they left all of that behind tavelled into a video game. The world they had known had been traded in for a new one. And as it turns out this was not a dream you wake from, they were trapped."
          : "One day they woke up to find the world they had known changed forever, a video game had come to life in the real world. This must be a dream they thought, but they were already awake."}{" "}
      </p>
      <p className="overview-p">
        {" "}
        {pizzaInput === "yes"
          ? "In this new reality they were sent out on a very important mission - to save pizza from extinction. No one could be more perfec for this, as no one had ever loved pizza more than them. They would go to any lenghts to prevent this from happening, as it turns out even eat a cricket."
          : "In this new reality pizza had become extinct beacuse someone had refused to eat a cricket to prevent it from happening and the world was not the same because of it. It was a little less joyful and a little less greasy."}{" "}
      </p>
      <p className="overview-p">
        {" "}
        {mathInput === "c"
          ? "The only way to return things to normal was by solving a seemingly impossible mathematical equation. Of course this was no match for this genious, easy peasy lemon squeezy. And like waking up from a dream, the world returned to normal and they lived happily ever."
          : "The only way to return things to normal was by solving a seemingly impossible mathematical equation. However this equation turned out not to be very difficult, luckily. They would have been in trouble otherwise. Back to lala-land they went and lived happily ever."}{" "}
      </p>
      <p className="overview-p">The End.</p>
    </section>
  );
};

export default Overview;
