import React from 'react';

const musicStyles = ['Pop', 'Classical', 'Rock/Metal', 'Hip Hop', 'Other'];

const MusicStyleQuestion = ({
  musicInput,
  onMusicStyleChange,
  onStepChange,
}) => {
  return (
    <form>
      <p>What kind of music would you like us to perform?</p>
      <select>
        {musicStyles.map((musicStyl) => (
          <option
            key={musicStyl}
            value={musicInput}
            onChange={onMusicStyleChange}
          >
            {musicStyl}
          </option>
        ))}
      </select>
      <button onClick={onStepChange}>Next</button>
    </form>
  );
};

export default MusicStyleQuestion;
