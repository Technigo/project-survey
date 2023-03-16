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
    <>
      <h1>This is what I learnt about you: </h1>
      <p>
        What you like most about your workplace
        are the {adjective} {foodNoun}.
        In fact, the {adjective} {foodNoun} are a big part of who you are.
      </p>
      <p> In your spare time you enjoy {ingVerb} with your {clothingNoun} on,
        preferably in the company of {celebrity}.
      <p> But let&#39;s be real here.</p>
      <p>You probably end up {ingVerb} alone, since {celebrity} probably has more
        important stuff to do than {ingVerb} with you.
      </p>
      <p>That would be really cool though.</p>
      </p>
      <p> If you were to change your career,
        you would probably end up in the {jobSector} industry.
      </p>
      <p> Rumor has it that there is a high demand for particularily {jobSector} jobs,
      so that will probably work out really well for you.
      </p>
      <p> You are most proud of your {happyAdjective} smile, your great {bodyPart}
       and your ability to always {infinitiveVerb}.
      </p>
      <p> Your previous boss would probably describe you as {descriptiveAdjective}.</p>
    </>
  )
}