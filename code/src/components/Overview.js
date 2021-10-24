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
        Once upon a time in a place called Lalaland lived a very special person
        called {nameInput}.
      </p>
      <p className="overview-p">
        {" "}
        {animalInput === "elephant"
          ? "In this upside-down land of miniature mountains, infinite puddles they lives with their 100 tiny pet elephants."
          : "In this upside-down land of miniature mountains and infinite puddles they lived with their pet duck. But this was no ordinairy duck, it was the biggest duck you had ever seen, it was as big as an elephant."}
      </p>
      <p className="overview-p">
        {" "}
        {astleyInput === "all-above"
          ? "And they would never give them up, let them down, make them cry or hurt them."
          : "And they would never give them up, let them down, make them cry or hurt them."}{" "}
      </p>
      <p className="overview-p">
        {" "}
        {gameInput === "inside"
          ? "But one night as they drifted off to sleep and into the land of dreams, they left all of that behind and tavelled into a video game. The world they had known had now been traded in for a new one. And as it turns out this was not a dream you wake up from, they were trapped."
          : "One day they woke up to find the world they had known had changed forever, a video game had come to life in the real world. This must be a dream they thought, but they were already awake."}{" "}
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
      <p className="overview-end">the end.</p>
      <button onClick={() => window.location.reload(false)}>
        Play Again to rewrite your story!
      </button>
    </section>
  );
};

export default Overview;
