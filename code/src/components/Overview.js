import React from "react";

export const Overview = ({
  socialInput,
  emotionalInput,
  physicalInput,
  workInput,
}) => {
  return (
    <main className="overview-container">
      <h3 className="overview-heading">Question 1: SOCIAL LIFE</h3>

      {socialInput === "friend" && (
        <p className="overview-paragraph">
          You saw a friend, must have been nice!
        </p>
      )}
      {socialInput === "family" && (
        <p className="overview-paragraph">
          It's always nice to call first and have good dialogue with your
          family. They are your roots!
        </p>
      )}
      {socialInput === "cinema" && (
        <p className="overview-paragraph">Wow! So you are a man of culture!</p>
      )}
      {socialInput === "dinner" && (
        <p className="overview-paragraph">
          Fancy! Who did you have dinner with?
        </p>
      )}
      {socialInput === "party" && (
        <p className="overview-paragraph">
          So Fancy! Hope you had a great social experience there!
        </p>
      )}

      <h3 className="overview-heading">Question 2: EMOTIONAL LIFE</h3>
      {emotionalInput === "Happy and joyful" && (
        <p className="overview-paragraph">
          Great, your day was happy and joyful! Now take that mood to the bed!
        </p>
      )}
      {emotionalInput === "Worried/Anxious" && (
        <p className="overview-paragraph">
          Oh no. What made you worry? It will not last forever, believe in
          yourself and haev a good cup of tea before going to bed. Remember,
          tomorrow is another day!
        </p>
      )}
      {emotionalInput === "Energetic" && (
        <p className="overview-paragraph">
          So you've had an energetic day! I am sure you have spread happy and
          energetic vibe to everyone who was with you!
        </p>
      )}

      <h3 className="overview-heading">Question 3: PHYSICAL LIFE</h3>
      {physicalInput === "Yes" && (
        <p className="overview-paragraph">
          You worked out today! So good of you.
        </p>
      )}
      {physicalInput === "No" && (
        <p className="overview-paragraph">
          You didn't work out today, was it a hectic day? It's okay! But maybe
          try to exercise a little bit tomorrow then.
        </p>
      )}

      <h3 className="overview-heading">Question 4: WORK LIFE</h3>
      {workInput === "Yes" && (
        <p className="overview-paragraph">
          It's good to know that you felt appreciated at your work today. You
          deserve it, you work so hard!
        </p>
      )}
      {workInput === "No" && (
        <p className="overview-paragraph">
          Oh no! People should appreciate you more, you do so much and you
          deserve the best praise in the world.
        </p>
      )}

      <h3 className="overview-heading">Conclusion</h3>
      <p>
        Tomorrow will be even better than today, because you are wonderful and
        you deserve a good day everyday!
      </p>
    </main>
  );
};
