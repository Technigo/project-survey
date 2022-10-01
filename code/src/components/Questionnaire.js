import PageNumber from './PageNumber';
import Button from './Button';
import TextInput from './Inputs/TextInput';
import RadioInput from './Inputs/RadioInput';
import RangeInput from './Inputs/RangeInput';
import SelectInput from './Inputs/SelectInput';

// This is a re-usable component to render a label/title, a page index, a form and the OK button for each page
const Questionnaire = ({
  label,
  pageIndex,
  inputType,
  setter,
  value,
  nextPage,
  buttonText,
}) => {
  return (
    <section className="form-wrapper">
      <h2 className="form-label">{label}</h2>
      <PageNumber pageIndex={pageIndex} />
      {inputType === 'text' && <TextInput value={value} setter={setter} />}
      {inputType === 'radio' && <RadioInput value={value} setter={setter} />}
      {inputType === 'rangeslider' && (
        <RangeInput value={value} setter={setter} />
      )}
      {inputType === 'select' && <SelectInput value={value} setter={setter} />}

      <div className="submit-button-wrapper">
        <Button nextPage={nextPage} buttonText={buttonText} />
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
