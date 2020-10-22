import React from 'react';

const Summary = (props) => {
  return (
    <article className="summary question__wrapper">
      <p className="summary__thanks">
        Thank you {props.name} for taking some time to answer this survey 😍
      </p>

      <ul className="summary__answers">
        <li>Name: {props.name}</li>
        <li>Age: {props.ageGroup}</li>
        <li>The most valuable skills: {props.skills.join(', ')}</li>
        <li>Other suggestions: {props.suggestions}</li>
        <li>Title: {props.title}</li>
      </ul>

      <p className="summary__bye">
        Your thoughts are of great value to me, I'll make sure to remember them.
        Meanwhile, feel free to follow my journey on social media below.{' '}
        <span role="img">🥰</span>
      </p>

      <div className="summary__social-media__wrapper">
        <a
          href="https://instagram.com/karinnordkvist"
          target="_blank"
          rel="noopener noreferrer"
          title="See my progress on Instagram"
        >
          <img
            className="summary__social-media__image"
            src="../images/instagram-logo.svg"
            alt="See my progress on Instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/karin-nordkvist/"
          target="_blank"
          rel="noopener noreferrer"
          title="Connect with me on Linkedin"
        >
          <img
            className="summary__social-media__image"
            src="../images/linkedin-logo.svg"
            alt="Connect with me on Linkedin"
          />
        </a>
        <a
          href="https://medium.com/@karinnordkvist"
          target="_blank"
          rel="noopener noreferrer"
          title="Read about my journey at Medium"
        >
          <img
            className="summary__social-media__image"
            src="../images/medium-logo.svg"
            alt="Read about my journey at Medium"
          />
        </a>
      </div>
    </article>
  );
};
export default Summary;
