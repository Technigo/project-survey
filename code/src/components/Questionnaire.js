import NameInput from './NameInput';
import Button from './Button';

const Questionnaire = ({ label, pageIndex, inputType }) => {
  // {label} - for example "Let's get started - what's your name?"
  // {pageIndex ->} - position absolute
  // input based on {inputType} - like text, dropdown and radio-buttons, maybe checkboxes too
  // separate components for rendering the different input types
  // div for button and "press Enter ↵"
  // button with option to change button text, otherwise default OK and svg checkbox
  return (
    <div className="form-wrapper">
      <h2 className="form-label">{label}</h2>
      <div className="form-page-index">
        {pageIndex}
        <img
          className="arrow-right"
          src="./assets/zondicons/arrow-thin-right.svg"
          alt="arrow right"
        />
      </div>
      {inputType === 'name' && <NameInput />}
      <div className="submit-button-wrapper">
        <Button />
        <p className="press-enter">
          press
          <span>
            <strong> Enter ↵</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Questionnaire;
