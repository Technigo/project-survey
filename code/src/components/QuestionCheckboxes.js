import React from 'react';

// components
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

const QuestionCheckboxes = ({ section, setSection, platforms, setPlatforms }) => {
  const platformsGroup = ['Spotify', 'SoundCloud', 'Bandcamp', 'Apple Music', 'YouTube Music', 'Other'];
  const handlePlatformsChange = (platformValue) => {
    if (platforms.includes(platformValue)) {
      setPlatforms(platforms.filter((item) => item !== platformValue))
    } else {
      setPlatforms([...platforms, platformValue])
    }
  }
  return (
    <>
      <p>What streaming platform(s) do you use?
        {platformsGroup.map((platform) => (
          <span key={platform} className="platform-checkbox">
            <label htmlFor={platform}>
              <input
                type="checkbox"
                checked={platforms.includes(platform)}
                onChange={() => handlePlatformsChange(platform)}
                name="platform"
                id={platform} />{platform}
            </label>
          </span>
        ))}
      </p>
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
    </>
  )
}

export default QuestionCheckboxes;