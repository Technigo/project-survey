import React from 'react';
import logo from 'assets/snitch.png';

const Summary = ({
  nameInput,
  characterInput,
  homeInput,
  spellInput,
  likeInput,
}) => {
  const likeAnswer = () => {
    return likeInput >= 5
      ? 'You seem to really like Harry Potter! You are a true Potterhead! '
      : 'Okey, so you don´t like Harry Potter that much.. Glad you took this test anyway!';
  };

  return (
    <section className='questionWrapper'>
      <div className='question'>
        <img src={logo} className='icon' alt='snitch icon' />
        <h3 tabindex='0'>
          Hello <span className='dormitoryTag'>{nameInput}</span> aka{' '}
          <span className='dormitoryTag'>{characterInput}</span>!
        </h3>
        <p className='summaryTag' tabindex='0'>
          In which dormitory do you belong?
        </p>
        <p tabindex='0'>
          I belong in <span className='dormitoryTag'>{homeInput}</span>!
        </p>
        <p className='summaryTag' tabindex='0'>
          What is your favourite spell?
        </p>
        <p tabindex='0'>
          My favourite spell is{' '}
          <span className='dormitoryTag'>{spellInput}</span>.
        </p>
        <p className='summaryTag' tabindex='6'>
          And finally, how much do you love Harry Potter?
        </p>
        <p tabindex='7'>{likeAnswer()}</p>
      </div>
    </section>
  );
};

export default Summary;
