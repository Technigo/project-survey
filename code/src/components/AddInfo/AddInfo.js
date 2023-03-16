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
    <>
      <h2>Would you like to add anything else?</h2>
      <label htmlFor="yes-add">
        <input
          type="radio"
          id="yes-add"
          name="add-info-radio"
          value="yes"
          checked={addInfo === 'yes'}
          onChange={handleAddInfoChange}
          required />
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
          required />
        No
      </label>

      {addInfo === 'yes' && (
        <Textbox
          textbox={textbox}
          setTextbox={setTextbox}
          handleSubmit={handleSubmit} />
      )}

      <ButtonSubmit onSubmit={handleSubmit} />
    </>
  );
}
