import React from 'react';

export const Result = ({
  adjective,
  foodNoun,
  ingVerb,
  clothingNoun,
  celebrity,
  jobSector,
  happyAdjective,
  bodyPart,
  infinitiveVerb,
  descriptiveAdjective
}) => {
  return (
    <div className="story-container">
      <h1 className="result-title">This is what I learnt about you: </h1>
      <div className="story-text">
        <p>
        What you like most about your workplace
        are the {adjective} {foodNoun}.
        In fact, the {adjective} {foodNoun} are a big part of who you are.
        If you could pick something to bring with you to a desert island that would
        definitely be {adjective} {foodNoun}.
          <br />
        In your spare time you enjoy {ingVerb} with your {clothingNoun} on,
        preferably in the company of {celebrity}.
        But let&#39;s be real here.
        It&#39;s likely that you will end up {ingVerb} alone, since {celebrity} probably has more
        important stuff to do than {ingVerb} with you.
        That would be really cool though.
          <br />
        If you were to change your career,
        you would probably end up in the {jobSector} industry.
        There is a high demand for particularily {jobSector} jobs,
        so that will probably work out really well for you.
        Fun fact: Rumor has it that {celebrity} used to work in the {jobSector} industry before
        getting famous.
          <br />
        You are most proud of your {happyAdjective} smile, your great {bodyPart} and
        your ability to always {infinitiveVerb}.
        Your previous boss would probably describe you as {descriptiveAdjective}.
        </p>
      </div>
      <button aria-label="restart-button" className="restart-button" type="button" onClick={() => window.location.reload()}>Try again!</button>

    </div>

  )
}
