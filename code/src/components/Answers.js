//Question 5
import React from 'react';
import JSConfetti from 'js-confetti';

const Answers = ({ name, food, game, email, snack, licoriceCandy, drink }) => {
  const jsConfetti = new JSConfetti();

  return (
    <div className='container'>
      <div className='fifthQuestion'>
        {jsConfetti.addConfetti({
          confettiRadius: 4,
          confettiNumber: 300,
          emojis: ['✨', '🥂', '🥳'],
          emojiSize: 50,
        })}
        <h1>
          That's it, well done!{' '}
          <span role='img' aria-label='balloon emoji'>
            🎈
          </span>
        </h1>
        <h2>Your answers were:</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Food:</strong> {food}, {snack}, {licoriceCandy}
        </p>
        <p>
          <strong>Drink:</strong> {drink}
        </p>
        <p>
          <strong>Game:</strong> {game}
        </p>
        {email === true && (
          <p>An email with your answers will also be sent to you. </p>
        )}
        {licoriceCandy === "I don't like licorice" && (
          <p>
            I'm afraid that I have to end our friendship here. I can't be
            friends with anyone that doesn't like licorice...
          </p>
        )}
      </div>
    </div>
  );
};

export default Answers;
