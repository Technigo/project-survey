/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React from 'react';
import './storytime.css';

export const StoryTime = ({ name, place, animal, horror, food }) => {
  const Choises = () => {
    if (animal === 'duck') {
      animal = 'the duck'
    } else {
      animal = 'the frog'
    }
    if (horror === 'snakes') {
      horror = 'pushing them into snake pits'
    } else if (horror === 'pinapple') {
      horror = 'adding pinapple on their pizzas'
    } else {
      horror = 'throwing them off airplanes'
    }
    if (place === 'forest') {
      place = 'a green forest'
    } else if (place === 'mountain') {
      place = 'a stunning mountain valley'
    } else {
      place = 'a mystical kingdom'
    }
  }

  Choises();

  return (
    <div className="story-time-container">
      <h1>Here is your story</h1>
      <p className="story-time-text">Once upon a time, in a land faraway called Technigoia there once lived a hero called {name} that lived on a small farm together with the {animal} Friddi.
        <br />
        <br />
        One day {name} learnt of a dark wizard who terrorized people by {horror}. Our hero set out to save the people of Technigoia.
        <br />
        <br />
         Friddi and {name} traveled across the land until the arrived at {place}. There they met the dark wizard. {name} challenged the wizard. They fought for severals days and nights. One moment when they both were catching their breaths. {name} asked the wizard:
        <br />
        <br />
      &quot;Are you hungry?&quot;
        <br />
        <br />
      &quot;Yes I am!&quot; said the wizard
        <br />
        <br />
      &quot;How about you stop terrorizing people and I&apos;ll treat you to some {food}!&quot; said {name}
        <br />
        <br />
      &quot;Okay, then! We have a deal!&quot; said the wizard.
        <br />
        <br />
        <br />
      And everyone lived happily ever after.
        <br />
        <br />
      THE END

      </p>

      <div>
        <button className="play-again-btn" onClick={() => window.location.reload(false)}>
          Play again to rewrite your story!
        </button>
      </div>

      <h2>Image credits</h2>
      <div className="links-container">
        <p>Warrior: <a href="https://www.artstation.com/clembod">Clembod</a></p>
        <p>Forest: <a href="https://craftpix.net/freebies/free-forest-battle-backgrounds">Craftpix</a></p>
        <p>Mountains: <a href="https://craftpix.net/freebies/free-mountain-backgrounds-pixel-art/">Craftpix</a></p>
        <p>Magical kingdom: <a href="https://trixelized.itch.io/starstring-fields">Trixie</a></p>
        <p>Duck: <a href="https://www.vecteezy.com/vector-art/19922273-8bit-pixels-art-duck-vector-duck-pixel-art-design">Saju Dey at Vecteezy</a></p>
        <p>Frog: <a href="https://www.vecteezy.com/vector-art/20416366-vector-withered-green-frog-with-teary-eyes-pixel-art-style-suitable-for-sticker-and-decoration">Fadil Kya at Vecteezy</a></p>
        <p>Snake: <a href="https://craftpix.net/freebies/free-desert-enemy-sprite-sheets-pixel-art/?num=1&count=330&sq=desert%20enemy&pos=5">Craftpix</a></p>
        <p>Pinapple: <a href="https://www.freepik.com/free-vector/collection-mixed-pixelated-fruits_2632369.htm#query=pixel%20fruit&position=0&from_view=search&track=ais">Freepik</a></p>
        <p>Airplane: <a href="https://www.freepik.com/premium-vector/pixel-art-traveling-vehicle_16639246.htm#query=travel%20pixel&position=21&from_view=search&track=ais">Freepik</a></p>
        <p>Pizza, donut, hamburger: <a href="https://www.vecteezy.com/vector-art/17678878-pixel-art-burgers-pizza-buns-and-sandwiches">Vecteezy</a></p>
        <p>Sword in logo: <a href="https://www.vecteezy.com/vector-art/12014529-sword-pixel-art">Vecteezy</a></p>
        <p>Heart in logo: <a href="https://www.vecteezy.com/vector-art/6689313-heart-icon-pixel-art-isolated-on-white-background">Vecteezy</a></p>
        <p>Font in logo: <a href="https://www.mansgreback.com/">Måns Grebäck</a></p>
      </div>
    </div>
  )
}