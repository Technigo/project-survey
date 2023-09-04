import React from 'react';

// components
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import ProgressBar from './ProgressBar';

import 'styles/form.css'

const QuestionCheckboxes = ({ step, setStep, section, setSection, platforms, setPlatforms }) => {
  const platformsGroup = ['A streaming platform', 'A record player', 'CD:s', 'MP3-Player'];
  const handlePlatformsChange = (platformValue) => {
    if (platforms.includes(platformValue)) {
      setPlatforms(platforms.filter((item) => item !== platformValue))
    } else {
      setPlatforms([...platforms, platformValue])
    }
  }
  return (
    <>
      <fieldset>
        <legend>What do you use to listen to music?</legend>
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
      </fieldset>
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
      <ProgressBar
        step={step} />
    </>
  )
}

export default QuestionCheckboxes;