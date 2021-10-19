import React from "react";

const BravoMentor = () => {
  return (
    <form className="bravomentor">
      <span class="mentorcardbox">
        <input
          className="mentorcard"
          type="image"
          src="pictures/Erika-Jayne.jpeg"
          alt="erika jayne"
        />
        <p className="mentorcard-text">
          Erika Jayne: The queen of fabolous. Having zero fucks to give.
        </p>
      </span>
      <span class="mentorcardbox">
        <input
          className="mentorcard"
          type="image"
          src="pictures/tom-schwartz.png"
          alt="tom schwartz"
        />
        <p className="mentorcard-text">
          Tom Schwartz: Everyone loves Schwartzie. However making decicions are
          not his thing. But with a partner who can bplay the bad cop, Tom is
          golden!
        </p>
      </span>
      <span class="mentorcardbox">
        <input
          className="mentorcard"
          type="image"
          src="pictures/craig-conover.jpg"
          alt="craig conover"
        />
        <p className="mentorcard-text">
          Craig Conover: The southern gentelman who loves to sew. And party. And
          flirt.
        </p>
      </span>
      <span class="mentorcardbox">
        <input
          className="mentorcard"
          type="image"
          src="pictures/kate-chastain.jpeg"
          alt="kate chastain"
        />
        <p className="mentorcard-text">
          Kate Chastain: Has served every celebreity there is. Master of resting
          bitchface and can make every cocktail there is and earn the biggest
          tip of the season.
        </p>
      </span>
    </form>
  );
};

export default BravoMentor;
