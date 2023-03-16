import React from 'react';
import NextButton from './Button';
import PreviousButton from './PreviousButton'

const Page2 = ({ counter, setCounter, foxtype, setFoxtype }) => {
  return (
    <div className="leftbox">
      <div className="leftboxChild">
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
    </div>

  )
}

export default Page2;