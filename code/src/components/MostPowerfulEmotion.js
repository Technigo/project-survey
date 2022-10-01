import React from 'react';

const MostPowerfulEmotion = ({ setStrongestEmotion }) => {
  return (
    <div className="question-wrapper">
      <fieldset>
        <label htmlFor="strongest-emotion">
          Throughout your life, what has been your most powerful emotion?
          <br />
          <select className="input-field" name="strongest-emotion" required onChange={(event) => setStrongestEmotion(event.target.value)}>
            <option disabled selected>Select feeling</option>
            <option id="happiness" value="happiness">Happiness</option>
            <option id="sadness" value="sadness">Sadness</option>
            <option id="fear" value="fear">Fear</option>
            <option id="disgust" value="disgust">Disgust</option>
            <option id="anger" value="anger">Anger</option>
            <option id="surprise" value="surprise">Surprise</option>
            <option id="love" value="love">Love</option>
          </select>
        </label>
      </fieldset>
    </div>
  )
}

export default MostPowerfulEmotion;