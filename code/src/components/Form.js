/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import Header from './Header';
import NameInput from './NameInput';
import UnexplaiableEventsCheckbox from './UnexplainableEventsCheckbox';
import ValuedTrait from './ValuedTrait';
import MostPowerfulEmotion from './MostPowerfulEmotion';
import ContentMeter from './ContentMeter';
import SubmissionOverview from './SubmissionOverview';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  const [valuedTrait, setValuedTrait] = useState('');
  const [strongestEmotion, setStrongestEmotion] = useState();
  const [contentLevel, setContentLevel] = useState(5)
  const [checked, setChecked] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="outer-wrapper">
      <Header />
      <section className="inner-wrapper">
        {submitted && (
          <SubmissionOverview
            userName={userName}
            checked={checked}
            valuedTrait={valuedTrait}
            strongestEmotion={strongestEmotion}
            contentLevel={contentLevel} />
        )}
        {!submitted && (<form onSubmit={handleSubmit}>
          <NameInput setUserName={setUserName} />
          <UnexplaiableEventsCheckbox checked={checked} setChecked={setChecked} />
          <ValuedTrait valuedTrait={valuedTrait} setValuedTrait={setValuedTrait} />
          <MostPowerfulEmotion setStrongestEmotion={setStrongestEmotion} />
          <ContentMeter contentLevel={contentLevel} setContentLevel={setContentLevel} />
          <button className="submit-button" type="submit">Submit</button>
        </form>)}
      </section>
    </div>
  )
}
export default Form;
