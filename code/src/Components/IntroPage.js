import React from 'react';

export const IntroPage = ({ introPage, setIntroPage }) => {
  const handleIntroPage = (event) => {
    setIntroPage(event.target.value);
  }
  return (
    <>
      <p className="intro-title"> Do you want me to tell you who you are?</p>
      <p className="intro-text"> Please enter your name and press &#39;Next&#39;  </p>
      <input aria-label="input field for name" className="input-field" type="text" placeholder="name" value={introPage} onChange={handleIntroPage} />

    </>
  )
}