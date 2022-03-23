import React from "react";

const Overview = ({ nameInput, goals, handInTime, graduation, radioValue }) => {
  return (
    <section className="form-container overview">
      <h2>
        First of all {nameInput}, I want to give you a big high five for coming
        this far and I'm so happy we are doing this together!
      </h2>
      <div className="overview-container">
        <div className="overview-text">
          <p>
            <span>For each week </span>you never know how many steps of the
            requirements you will manage to do, but you <span>{goals} </span>
            and that's totally fine, the most important thing is that you keep
            doing this because you think it's fun!
          </p>
          <p>
            <span>Hand in time</span> can be hectic but you usually hand in{" "}
            <span>{handInTime}</span>. No matter the time, it's always inspiring
            to see what ideas everyone has come up with each week.
          </p>
          <p>
            <span>It's hard to believe</span> that we will be graduating pretty
            soon and in your words it will feel like you are{" "}
            <span>{graduation}</span>. But in the end no mater how you feel, you
            did something great, you took a risk not knowing where this would go
            and made it though!
          </p>
        </div>
        <div className="overview-img">
          <img className="img-overview" src={radioValue} alt={radioValue} />
        </div>
      </div>
    </section>
  );
};

export default Overview;
