import React from 'react'

export const PronounInput = ({ pronoun, setPronoun }) => {
  const pronouns = ['she/her', 'he/him', 'they/them']

  return (
    <>
    <legend>Pronoun</legend>
    {pronouns.map(pron => (
      
      <label key={pron}>
      <input
        type='radio'
        name='pronoun'
        value={pron} //how to update state??
        onChange={e => setPronoun(e.target.value)}
        checked={pronoun === pron}
        required
        />
        {pron}
    </label>
    ))}
    </>
  )
}