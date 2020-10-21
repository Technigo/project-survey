import React from 'react'

export const Summary = ({name, zodiac, question}) => {

  const match = zodiac => {
    if (zodiac === "Aries")
      return ("Aquarius")
    if (zodiac === "Taurus")
      return "Cancer"
    if (zodiac === "Gemini")
      return "Aquarius"
    if (zodiac === "Cancer")
      return "Pisces"
    if (zodiac === "Leo")
      return "Sagittarius"
    if (zodiac === "Virgo")
      return "Taurus"
    if (zodiac === "Libra")
      return "Gemini"
    if (zodiac === "Scorpio")
      return "Cancer"
    if (zodiac === "Sagittarius")
      return "Aries"
    if (zodiac === "Capricorn")
      return "Taurus"
    if (zodiac === "Aquarius")
      return "Gemini"
    if (zodiac === "Pisces")
      return "Scorpio"
  }

  return(
    <>
      <section className="summary">
        <p>Are you ready {name}?</p>
        <p>You zodiac sign is {zodiac} and your ultimate match would be with {match(zodiac)}.</p>
        <p>Go get 'em, tiger!</p>
      </section>
      <section className="summary">
        <p>Not ready yet?</p>
        <p>It's okay {name}. Come back whenever you want.</p>
      </section>
      </>
  )
}