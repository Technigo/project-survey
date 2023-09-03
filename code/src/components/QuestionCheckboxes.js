import React from 'react';

// components
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import ProgressBar from './ProgressBar';

import 'styles/form.css'

const QuestionCheckboxes = ({ step, setStep, section, setSection, platforms, setPlatforms }) => {
  const platformsGroup = ['Spotify', 'SoundCloud', 'Bandcamp', 'Apple Music', 'YouTube Music', 'Other platform(s)'];
  const handlePlatformsChange = (platformValue) => {
    if (platforms.includes(platformValue)) {
      setPlatforms(platforms.filter((item) => item !== platformValue))
    } else {
      setPlatforms([...platforms, platformValue])
    }
  }
  return (
    <>
      <p className="form__question">What streaming platform(s) do you use?</p>
      {platformsGroup.map((platform) => (
        <label key={platform} htmlFor={platform} className="form-control">
          <input
            type="checkbox"
            checked={platforms.includes(platform)}
            onChange={() => handlePlatformsChange(platform)}
            name="platform"
            id={platform} />{platform}
        </label>
      ))}
      <div>
        <PreviousButton
          whatQuestionPrevious="secondQuestion"
          section={section}
          setSection={setSection}
          setStep={setStep}
          whatStepBefore="2" />
        <NextButton
          whatQuestionNext="fourthQuestion"
          section={section}
          setSection={setSection}
          currentState={platforms.length}
          defaultState={0}
          message="Please select a platform"
          step={step}
          setStep={setStep}
          whatStepNext="4" />
      </div>
      <ProgressBar
        step={step} />
    </>
  )
}

export default QuestionCheckboxes;