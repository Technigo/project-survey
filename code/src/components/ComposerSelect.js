import React from 'react';

export const ComposerSelect = ( {composer, setComposer}) => {
  const onComposerChange = (e) => {
    setComposer(e.target.value)
  }
  return (
    <div className='question-wrapper'>
      <label htmlFor='composer-select' className="question">Choose a composer from the list you like the most</label>
      <select id='composer-select' value={composer} onChange={onComposerChange} required>
        <option disabled>--- select ---</option>
        <option>Chopin</option>
        <option>Bach</option>
        <option>Beethoven</option>
        <option>Liszt</option>
        <option>Sibelius</option>
        <option>Rachmaninov</option>
      </select>
    </div>  
  )
}