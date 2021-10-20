import React from "react";

const ColorPicker = ({
  colorInput,
  handleColorInputChange,
  onStepChange,
  onPreviousQuestionChange,
}) => {
  return (
    <>
      <section className="form-container">
        <form>
          <label className="label-text">Fourth favorite color</label>
          <input
            className="color-input"
            type="color"
            value={colorInput}
            onChange={handleColorInputChange}
          />
          <div>
            <button onClick={onPreviousQuestionChange}>Prev question</button>
            <button type="submit" name="song-question" onClick={onStepChange}>
              Next Question
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
export default ColorPicker;
