import React from 'react';
import './AddInfo.css';
import { Textbox } from './Textbox/Textbox';
import { ButtonSubmit } from '../Buttons/ButtonSubmit/ButtonSubmit';

export const AddInfo = ({
  addInfo,
  setAddInfo,
  handleSubmit,
  setTextbox,
  textbox
}) => {
  const handleAddInfoChange = (event) => {
    console.log(event.target.value);
    setAddInfo(event.target.value);
  };

  return (
    <section className="add-info-form" onSubmit={handleSubmit} autoComplete="off">
      <fieldset>
        <legend>Would you like to add anything else?</legend>
        <div id="add-info-description">Select this option if you would like to add additional information.</div>
        <label htmlFor="yes-add">
          <input
            type="radio"
            id="yes-add"
            name="add-info-radio"
            value="yes"
            checked={addInfo === 'yes'}
            onChange={handleAddInfoChange}
            required
            aria-describedby="add-info-description" />
          Yes
        </label>

        <label htmlFor="no-add">
          <input
            type="radio"
            id="no-add"
            name="add-info-radio"
            checked={addInfo === 'no'}
            value="no"
            onChange={handleAddInfoChange}
            required
            aria-describedby="add-info-description" />
          No
        </label>

        {addInfo === 'yes' && (
          <Textbox
            textbox={textbox}
            setTextbox={setTextbox}
            handleSubmit={handleSubmit} />
        )}

        <ButtonSubmit />
      </fieldset>
    </section>
  );
}
