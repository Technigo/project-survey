import React, { useState } from 'react';
import 'styles/form.css';
import Question1 from 'components/Question1';
import Question2 from 'components/Question2';
import Question3 from 'components/Question3';
import Question4 from 'components/Question4';
import Question5 from 'components/Question5';
import Summary from 'components/Summary';

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
            <Question1
              name={name}
              setName={setName}
              section={section}
              setSection={setSection}
            />
          </div>
        )}

        {section === 'secondQuestion' && (
          <div>
            <Question2
              ageGroup={ageGroup}
              setAgeGroup={setAgeGroup}
              section={section}
              setSection={setSection}
            />
          </div>
        )}

        {section === 'thirdQuestion' && (
          <div>
            <Question3
              skills={skills}
              setSkills={setSkills}
              section={section}
              setSection={setSection}
            />
          </div>
        )}

        {section === 'fourthQuestion' && (
          <div>
            <Question4
              suggestions={suggestions}
              setSuggestions={setSuggestions}
              section={section}
              setSection={setSection}
            />
          </div>
        )}

        {section === 'fifthQuestion' && (
          <div>
            <Question5
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
