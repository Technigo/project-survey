import React from 'react';

const musicStyles = ['Classical', 'Pop', 'Rock/Metal', 'Hip Hop', 'Other'];

const MusicStyleQuestion = ({
  musicInput,
  onMusicInputChange,
  onStepChange,
}) => {
  return (
    <form className='short-text-form'>
      <p>What kind of music would you like us to perform?</p>
      <select value={musicInput} onChange={onMusicInputChange}>
        {/* <option value='Classical'>Classical</option>
        <option value='Pop'>Pop</option>
        <option value='Other'>Other</option> */}
        {musicStyles.map((musicStyle) => (
          <option
            key={musicStyle}
            value={musicStyle}
            onChange={onMusicInputChange}
          >
            {musicStyle}
          </option>
        ))}
      </select>
      <button onClick={onStepChange}>Next</button>
    </form>
  );
};

export default MusicStyleQuestion;
