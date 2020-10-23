import React from 'react';

const Summary = ({ name, ageGroup, skills, suggestions, title }) => {
  return (
    <article className="summary question__wrapper">
      <ul className="summary__answers" tabIndex="0">
        <li>Name: {name}</li>
        <li>Age: {ageGroup}</li>
        <li>The most valuable skills: {skills.join(', ')}</li>
        <li>Other suggestions: {suggestions}</li>
        <li>Title: {title}</li>
      </ul>
      <button
        type="button"
        className="form__button__retakeSurvey"
        onClick={() => window.location.reload()}
      >
        Retake survey
      </button>
      <p className="summary__bye" tabIndex="0">
        Thank you {name} for taking some time to answer this survey! Your
        thoughts are of great value to me, I'll make sure to remember them.
        Meanwhile, feel free to follow my journey on social media below.{' '}
        <span role="img" aria-label="thankful emoji">
          🥰
        </span>
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
