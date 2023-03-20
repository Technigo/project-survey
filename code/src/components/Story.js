import React from 'react'

export const Story = ({ fairyName, color, horn, loveAct, name }) => {
  return (
    <>
      <container className="story-page">
        <p>
          <span className="big-letter-span">O</span>nce upon a time, in a magical land far, far away, lived a beautiful,
          <span className="color-span"> {color}</span> unicorn named <span className="fairy-name-span">{fairyName}</span>.
          <span className="fairy-name-span2"> {fairyName}</span> had a long,
          <span className="horn-span"> {horn}</span> horn and a mane that shimmered like a rainbow.
        </p>
        <p>
          One day, as <span className="fairy-name-span">{fairyName}</span> was grazing in a lush meadow,
          it came across a small creature named <span className="name-span">{name}</span>.
          <span className="name-span2"> {name}</span> was lost and alone, and very sad.
        </p>
        <p>
          <span className="fairy-name-span2">{fairyName}</span> walked over to the creature and gave
          <span className="name-span"> {name}</span> a <span className="love-span">{loveAct}</span>.
          Little <span className="name-span2"> {name}</span> was amazed to see a real unicorn!
        </p>
        <p>
          <span className="fairy-name-span">{fairyName}</span> wanted
          to do something nice for <span className="name-span">{name}</span>.
          So, <span className="fairy-name-span2">{fairyName}</span> offered to take <span className="name-span2">{name} </span>
          on a magical ride through the clouds.
        </p>
        <p>
          As <span className="fairy-name-span">{fairyName}</span> soared through the sky,
          <span className="name-span"> {name}</span> felt all worries disappear and
          saw the beauty in the world again.
          They flew past fluffy white clouds, colorful rainbows,
          and even a waterfall made of <span className="horn-span">{horn}</span> crystals.
          <span className="name-span"> {name}</span> would never forget
          that magical ride with<span className="fairy-name-span2">{fairyName}</span>, the unicorn.
        </p>
        <p>
          From that day on, whenever <span className="name-span2">{name}</span> felt sad or lost the little creature visited <span className="fairy-name-span">{fairyName} </span>in the meadow.
          <span className="fairy-name-span2"> {fairyName}</span> was always there to help see the beauty in the world.
        </p>
        <p>
          And so, the unicorn and the little creature lived happily ever after,
          surrounded by rainbows and magic.
        </p>
      </container>
      <button
        className="reload-btn"
        type="submit"
        onClick={() => window.location.reload()}>
        Create a new fairytale
      </button>
    </>
  )
}