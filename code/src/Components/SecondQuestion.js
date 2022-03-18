import React from 'react';

const SecondQuestion = ({
  onStepChange,
  onCharacterInputChange,
  characterInput,
  nameInput,
}) => {
  return (
    <section className='questionWrapper'>
      <div className='question'>
        <form>
          <h3 tabindex='0'>"Yer a wizard {nameInput}" - Rubeus Hagrid</h3>
          <h2 tabindex='0'>Which character would you choose to be?</h2>
          <select
            className='dropdown'
            aria-label='Choose your favourite character'
            value={characterInput}
            onChange={onCharacterInputChange}
          >
            <option value=''>select your character..</option>
            <option value='Harry Potter'>Harry Potter</option>
            <option value='Hermione Granger'>Hermione Granger</option>
            <option value='Ron Weasley'>Ron Weasley</option>
            <option value='Voldemort'>Voldemort</option>
            <option value='Luna Lovegood'>Luna Lovegood</option>
            <option value='Draco Malfoy'>Draco Malfoy</option>
          </select>

          <button
            className='btn'
            disabled={characterInput === ''}
            onClick={onStepChange}
          >
            Next Question
          </button>
        </form>
      </div>
    </section>
  );
};

export default SecondQuestion;
