import React from 'react';

const MostPowerfulEmotion = ({ setStrongestEmotion }) => {
  return (
    <div className="question-wrapper">
      <fieldset>
        <label htmlFor="strongest-emotion">Throughout your life, what has been your most powerful emotion?
          <br />
          <select className="input-field" name="strongest-emotion" required onChange={(event) => setStrongestEmotion(event.target.value)}>
            <option defaultValue={null}> </option>
            <option id="strongest-emotion" value="happiness">Happiness</option>
            <option id="strongest-emotion" value="sadness">Sadness</option>
            <option id="strongest-emotion" value="fear">Fear</option>
            <option id="strongest-emotion" value="disgust">Disgust</option>
            <option id="strongest-emotion" value="anger">Anger</option>
            <option id="strongest-emotion" value="surprise">Surprise</option>
            <option id="strongest-emotion" value="love">Love</option>
          </select>
        </label>
      </fieldset>
    </div>
  )
}

export default MostPowerfulEmotion;