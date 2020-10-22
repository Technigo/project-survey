import React from 'react'

export const Summary = ({name, zodiac, question, zodiacArray}) => {

  const zodiacMatch = zodiacArray.map(sign => sign.match)
  const zodiacText = zodiacArray.map(text => text.description)
  const zodiacName = zodiacArray.map(zodiac => zodiac.name)

  const findIndex = zodiacName.indexOf(zodiac)

  return(
    <>
      <section className="summary">
        <h2>Are you ready {name}?</h2>
        <p>Your zodiac sign is <span>{zodiac}</span> and your ultimate match would be with <span>{zodiacMatch[findIndex]}</span>.</p>
        <blockquote
          cite="https://www.yourtango.com/2016287945/12-zodiac-matches-that-would-make-best-couples?utm_source=self&utm_medium=social&utm_campaign=syndication">
          <span>❛❜</span>
          {zodiacText[findIndex]}
          <span>______</span>
          <cite><a href="https://www.yourtango.com/2016287945/12-zodiac-matches-that-would-make-best-couples?utm_source=self&utm_medium=social&utm_campaign=syndication">The Talko, YourTango</a></cite>
        </blockquote>
        <p>Go get 'em, tiger! <span role="img" aria-label="tiger">🐯</span></p>
      </section>
      {/* <section className="summary">
        <p>Not ready yet?</p>
        <p>It's okay {name}. Come back whenever you want.</p>
      </section>*/}
      </>
  )
}