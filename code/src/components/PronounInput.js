import React from 'react'

export const PronounInput = ({ pronoun, setPronoun }) => {
  const pronouns = ['she/her', 'he/him', 'they/them']

  return (
    <fieldset className='radiobutton-wrapper'>
      <legend className='radio-legend-two'>Pronoun
        {pronouns.map(pron => (
          
        <label key={pron} className='radio-two'>
          <input
            type='radio'
            name='pronoun'
            value={pron}
            onChange={e => setPronoun(e.target.value)}
            checked={pronoun === pron}
            required
            />
            <p>{pron}</p>
        </label>
        ))}
      </legend>
    </fieldset>
  )
}