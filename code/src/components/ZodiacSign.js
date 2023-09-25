import React from 'react'

export const ZodiacSign = ({ sign, setSign }) => {
/* const handleZodiacSignChange = (event) => {
    setSign(event.target.value);
  } */

  return (
    <div className="choose-container">
      <h2>Choose your Zodiac sign</h2>
      <form className="zodiacs">
        <select
          onChange={(event) => setSign(event.target.value)}
          value={sign}>
          <option value="" disabled>Choose Zodiac sign</option>
          <option value="Aries">Aries</option>
          <option value="Taurus">Taurus</option>
          <option value="Gemini">Gemini</option>
          <option value="Cancer">Cancer</option>
          <option value="Leo">Leo</option>
          <option value="Virgo">Virgo</option>
          <option value="Libra">Libra</option>
          <option value="Scorpio">Scorpio</option>
          <option value="Sagittarius">Sagittarius</option>
          <option value="Capricorn">Capricorn</option>
          <option value="Aquarius">Aquarius</option>
          <option value="Pisces">Pisces</option>
        </select>
      </form>
      <div className="Okey">
        {sign && (
          <p>Okey, so you&apos;re a {sign}, cool!</p>
        )}
      </div>
    </div>
  )
}
/* NR 2 */
