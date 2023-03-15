import React from 'react'

export const Story = ({ fairyName, color, horn, loveAct, name }) => {
  return (
    <container className="story-page">
      <p>
        Once upon a time, in a magical land far, far away, lived a beautiful,
        {color} unicorn named {fairyName}. {fairyName} had a long,
        {horn} horn and a mane that shimmered like a rainbow.
        One day, as {fairyName} was grazing in a lush meadow,
        it came across a small creature named {name}.
        {name} was lost and alone, and very sad.
        {fairyName} walked over to the creature and gave {name} a {loveAct}.
        Little {name} was amazed to see a real unicorn!
        {fairyName} could see the wonder in the little creatures eyes and wanted
        to do something nice for {name}.
        So, {fairyName} offered to take {name} on a magical ride through the clouds.
        As {fairyName} soared through the sky, {name} felt all worries disappear and
        saw the world from a whole new perspective, and it was beautiful.
        They flew past fluffy white clouds, colorful rainbows,
        and even a waterfall made of {color} crystals.
        When they landed back on the ground, {name} was filled with happiness and joy.
        {name} would never forget that magical ride with {fairyName} the unicorn.
        From that day on, {name} visited {fairyName} often in the meadow.
        And whenever {name} felt sad or lost,
        {fairyName} was always there to help her see the beauty in the world.
        And so, the unicorn and the little creature lived happily ever after,
        surrounded by rainbows and magic.
      </p>
      <button
        className="reload-btn"
        type="submit"
        onClick={() => window.location.reload()}>
        Create a new fairytale
      </button>
    </container>
  )
}