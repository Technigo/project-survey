import React, { useState } from 'react';

// Components
import QuestionTextInputName from 'components/QuestionTextInputName';
import QuestionRadioButtonsAge from 'components/QuestionRadioButtonsAge';
import QuestionCheckboxesSkills from 'components/QuestionCheckboxesSkills';
import QuestionTextInputSuggestions from 'components/QuestionTextInputSuggestions';
import QuestionDropdownTitle from 'components/QuestionDropdownTitle';
import Summary from 'components/Summary';

// Styling
import 'styles/form.css';

// ----------------------------------------------------------------

const Form = () => {
  const [section, setSection] = useState('firstQuestion');
  const [name, setName] = useState('');
  const [ageGroup, setAgeGroup] = useState(undefined);
  const [skills, setSkills] = useState([]);
  const [suggestions, setSuggestions] = useState('');
  const [title, setTitle] = useState('');

  return (
    <section className="form__wrapper">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {section === 'firstQuestion' && (
          <div>
            <QuestionTextInputName
              name={name}
              setName={setName}
              section={section}
              setSection={setSection}
            />
          </div>
        )}

        {section === 'secondQuestion' && (
          <div>
            <QuestionRadioButtonsAge
              ageGroup={ageGroup}
              setAgeGroup={setAgeGroup}
              section={section}
              setSection={setSection}
            />
          </div>
        )}

        {section === 'thirdQuestion' && (
          <div>
            <QuestionCheckboxesSkills
              skills={skills}
              setSkills={setSkills}
              section={section}
              setSection={setSection}
            />
          </div>
        )}

        {section === 'fourthQuestion' && (
          <div>
            <QuestionTextInputSuggestions
              suggestions={suggestions}
              setSuggestions={setSuggestions}
              section={section}
              setSection={setSection}
            />
          </div>
        )}

        {section === 'fifthQuestion' && (
          <div>
            <QuestionDropdownTitle
              title={title}
              setTitle={setTitle}
              section={section}
              setSection={setSection}
              name={name}
              ageGroup={ageGroup}
              skills={skills}
              suggestions={suggestions}
            />
          </div>
        )}

        {section === 'summary' && (
          <Summary
            name={name}
            ageGroup={ageGroup}
            skills={skills}
            suggestions={suggestions}
            title={title}
          />
        )}
      </form>
    </section>
  );
};

export default Form;
