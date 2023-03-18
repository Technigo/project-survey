import React from 'react';
import { Song } from './Song'

export const Result = (props) => {
  let longName = false;
  let badSchool = false;
  let thinPasta = false;
  let song = '';
  let text = '';
  let embedurl = '';

  if (props.answerOne.length > 4) { longName = true; }

  if (props.answerTwo === 'bad' || props.answerTeo === 'really bad') { badSchool = true; }

  if (props.answerThree === 'noodles') { thinPasta = true; }

  if (longName && badSchool && thinPasta) {
    song = 'American Football - Never Meant';
    text = "you're the true original midwest emo tune. pure longing and regret in 04:28. as they say, 'everyone's a gangster until that second guitar part comes in'. listen and you'll know.";
    embedurl = 'https://open.spotify.com/embed/track/6kZqCqD1r08sJAQ1TjuEpM?utm_source=generator'
  }

  if (longName && badSchool && !thinPasta) {
    song = "Sleep in. - I Do Know And I'm Not Sorry";
    text = "you have attitude, and a riff which makes you want to dramatically throw a plate on the ground. you walk with your back straight. people shouldn't mess with you.";
    embedurl = 'https://open.spotify.com/embed/track/4J1Ie6FTecIid0yPEHNGST?utm_source=generator'
  }

  if (longName && !badSchool && thinPasta) {
    song = 'Modern Baseball - Your Graduation';
    text = "uou're all about high school and unrequited love. you know what? it's their loss. you also have a really good guitar solo.";
    embedurl = 'https://open.spotify.com/embed/track/7kVoPBSlGghzLoQjODkxGD?utm_source=generator'
  }

  if (longName && !badSchool && !thinPasta) {
    song = "Hot Mulligan - How Do You Know It's Not Armadillo Shells?";
    text = "you're what happens when a guitar meets a drum machine and synth. you're both electronic and acoustic. you're the duality of man. and the final product really comes together well.";
    embedurl = 'https://open.spotify.com/embed/track/2oEInOIbcj4f9pFpxsS1Td?utm_source=generator'
  }

  if (!longName && badSchool && thinPasta) {
    song = 'Turnover - I Would Hate You If I Could';
    text = "you're melancholy, and somewhat sultry. but above all, you're really melodic. listening to you sing about old loves feels like walking on velvet in an empty room."
    embedurl = 'https://open.spotify.com/embed/track/5g1zOEyrfjMxorKlvCE3AN?utm_source=generator'
  }

  if (!longName && badSchool && !thinPasta) {
    song = 'The Appleseed Cast - Marigold & Patchwork';
    text = "you're old school. no nonsense. just straight up harsh heartache, wishing to go back in time. but you have to face the fact: it's not 1998 anymore. but there is still beauty in the present.";
    embedurl = 'https://open.spotify.com/embed/track/2MPndJjBcn555aZQyuvt3S?utm_source=generator'
  }

  if (!longName && !badSchool && !thinPasta) {
    song = 'Foxing - The Medic';
    text = "you don't feel like the others. you want more of life. you want to be loved, you want to be intoxicated. but be careful. don't go chasing something that would ultimately kill you.";
    embedurl = 'https://open.spotify.com/embed/track/5KzuAU7zxcP0bq0CPdRRyr?utm_source=generator'
  }

  if (!longName && !badSchool && thinPasta) {
    song = 'Tiny Moving Parts - Medicine';
    text = "you're intricate and modern. something tells me you are always wishing you were somewhere else than where you are, with someone else than the one you are with. but isn't there also beauty in the known?"
    embedurl = 'https://open.spotify.com/embed/track/0uqTwEKTbkuhrn8yGSO6b5?utm_source=generator'
  }

  return (
    <div className="result-container">
      <h2>your results:</h2>
      <p>your name is {props.answerOne}, your high school experience was {props.answerTwo},
      and you prefer {props.answerThree} in your pasta dish...
      </p>
      <div className="song-container">
        <Song song={song} text={text} url={embedurl} />
      </div>
    </div>
  )
}