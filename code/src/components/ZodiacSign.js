import React from 'react'

export const ZodiacSign = ({ sign, setSign }) => {
  const handleZodiacSignChange = (event) => {
    setSign(event.target.value);
  }

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];
  return (
    <div className="zodiac-container">
      <h2>Select your Zodiac Sign:</h2>
      <form>
        {zodiacSigns.map((signselector) => (
          <div key={sign}>
            <input type="radio" id={signselector} name="zodiac-sign" value={signselector} onChange={handleZodiacSignChange} checked={sign === signselector} />
            <label htmlFor={sign}>{sign}</label>
          </div>
        ))}
      </form>
      {sign && (
        <p>You have selected {sign} as your Zodiac Sign.</p>
      )}
    </div>
  );
}
/* NR 2 */