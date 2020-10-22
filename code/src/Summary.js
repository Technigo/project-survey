import React from 'react'

export const Summary = ({name, zodiac, question, zodiacArray}) => {

  const zodiacMatch = zodiacArray.map(sign => sign.match)
  const zodiacText = zodiacArray.map(text => text.description)
  const zodiacName = zodiacArray.map(zodiac => zodiac.name)
  const findIndex = zodiacName.indexOf(zodiac)

  return(
    <>
      {question === 'yes' ? (
        <section className="summary">
          <h2>Are you ready {name}?</h2>
          <p>Your zodiac sign is <span>{zodiac}</span> and your ultimate love match would be with <span>{zodiacMatch[findIndex]}</span>.</p>
          <blockquote
            cite="https://www.yourtango.com/2016287945/12-zodiac-matches-that-would-make-best-couples?utm_source=self&utm_medium=social&utm_campaign=syndication">
            <span className="quotation">❛❜</span>
            {zodiacText[findIndex]}
            <cite><a href="https://www.yourtango.com/2016287945/12-zodiac-matches-that-would-make-best-couples?utm_source=self&utm_medium=social&utm_campaign=syndication" target="_blank" rel="noopener noreferrer">
              – The Talko, <span>YourTango</span></a>
            </cite>
          </blockquote>
          <p>Go get 'em, tiger! <span role="img" aria-label="tiger">🐯</span><span role="img" aria-label="heart">💛</span></p>
        </section>
        ) : (
          <section className="summary">
            <h2>Not ready to find love yet?</h2>
            <p>It's okay {name}. We can find your ultimate <span>{zodiac}</span> love match another time.</p>
            <p>See you later, tiger! <span role="img" aria-label="tiger">🐯</span><span role="img" aria-label="heart">💛</span></p>
          </section>
        )         
      }
      </>
  )
}