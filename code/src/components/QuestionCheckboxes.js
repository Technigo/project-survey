import React from 'react';

// components
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

import 'styles/form.css'

const QuestionCheckboxes = ({ section, setSection, platforms, setPlatforms }) => {
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
        <label htmlFor={platform} className="form-control">
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
          whatQuestionPrevious="thirdQuestion"
          section={section}
          setSection={setSection} />
        <NextButton
          whatQuestionNext="fifthQuestion"
          section={section}
          setSection={setSection}
          currentState={platforms.length}
          defaultState={0}
          message="Please select a platform" />
      </div>
    </>
  )
}

export default QuestionCheckboxes;