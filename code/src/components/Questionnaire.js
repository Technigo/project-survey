import TextInput from './TextInput';
import RadioInput from './RadioInput';
import Button from './Button';
import FormPageIndex from './FormPageIndex';

const Questionnaire = ({
  label,
  pageIndex,
  inputType,
  setter,
  value,
  nextPage,
}) => {
  // {label} - for example "Let's get started - what's your name?"
  // input based on {inputType} - like text, dropdown and radio-buttons, maybe checkboxes too
  // separate components for rendering the different input types
  // div for button and "press Enter ↵"
  // button with option to change button text, otherwise default OK and svg checkbox
  return (
    <section className="form-wrapper">
      <h2 className="form-label">{label}</h2>
      <FormPageIndex pageIndex={pageIndex} />
      {inputType === 'text' && <TextInput value={value} setter={setter} />}
      {inputType === 'radio' && <RadioInput value={value} setter={setter} />}

      <div className="submit-button-wrapper">
        <Button nextPage={nextPage} />
        <p className="press-enter">
          press
          <span>
            <strong> Enter ↵</strong>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Questionnaire;
