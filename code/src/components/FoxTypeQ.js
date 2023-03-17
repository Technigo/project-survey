import React from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton'

const FoxTypeQ = ({ counter, setCounter, foxtype, setFoxtype }) => {
  return (
    <div className="textboxChild">
      <select
        className="selectFox"
        value={foxtype}
        onChange={(event) => setFoxtype(event.target.value)}>
        <option value="" defaultValue disabled>Your purchase</option>
        <option value="redfox">Vulpes vulpes, red fox</option>
        <option value="capefox">Vulpes chama, Cape fox</option>
        <option value="fennecfox">Vulpes zerda, Fennec fox</option>
      </select>
      <div className="button-container">
        <NextButton counter={counter} setCounter={setCounter} />
        <PreviousButton counter={counter} setCounter={setCounter} />
      </div>
    </div>
  )
}

export default FoxTypeQ;