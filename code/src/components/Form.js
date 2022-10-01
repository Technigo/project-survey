/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import Header from './Header';
import NameInput from './NameInput';
import ValuedTrait from './ValuedTrait';
import MostPowerfulEmotion from './MostPowerfulEmotion';
import SubmissionOverview from './SubmissionOverview';
import LikelihoodMeter from './LikelihoodMeter';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  const [valuedTrait, setValuedTrait] = useState('');
  const [strongestEmotion, setStrongestEmotion] = useState();
  const [likelihood, setLikelihood] = useState(5)

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="outer-wrapper submission-wrapper">
      {submitted && (
        <section className="inner-wrapper">
          <SubmissionOverview
            userName={userName}
            valuedTrait={valuedTrait}
            strongestEmotion={strongestEmotion}
            likelihood={likelihood} />
        </section>
      )}
      {!submitted && (
        <>
          <Header />
          <section className="inner-wrapper">
            <form onSubmit={handleSubmit}>
              <NameInput setUserName={setUserName} />
              <ValuedTrait valuedTrait={valuedTrait} setValuedTrait={setValuedTrait} />
              <MostPowerfulEmotion setStrongestEmotion={setStrongestEmotion} />
              <LikelihoodMeter likelihood={likelihood} setLikelihood={setLikelihood} />
              <button className="submit-button" type="submit" aria-label="submit form">Submit</button>
            </form>
          </section>
        </>)}
    </div>
  )
}
export default Form;