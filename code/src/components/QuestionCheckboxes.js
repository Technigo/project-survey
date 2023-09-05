import React from 'react';

// components
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import ProgressBar from './ProgressBar';

import 'styles/form.css'

const QuestionCheckboxes = ({ step, setStep, section, setSection, devices, setDevices }) => {
  const devicesGroup = ['Mobile phone', 'Computer', 'Record player', 'CD player', 'MP3-Player', 'Casette player', 'Other'];
  const handleDevicesChange = (deviceValue) => {
    if (devices.includes(deviceValue)) {
      setDevices(devices.filter((item) => item !== deviceValue))
    } else {
      setDevices([...devices, deviceValue])
    }
  }
  return (
    <>
      <h2>Music devices (Step 3 of 5)</h2>
      <fieldset>
        <legend>What device(s) do you use to listen to music?<span>Required</span></legend>
        {devicesGroup.map((device) => (
          <label key={device} htmlFor={device} className="form-control">
            <input
              type="checkbox"
              autoComplete="off"
              checked={devices.includes(device)}
              onChange={() => handleDevicesChange(device)}
              name="platform"
              id={device} />{device}
          </label>
        ))}
      </fieldset>
      <section className="form__navigation">
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
          currentState={devices.length}
          defaultState={0}
          message="Please select a device"
          step={step}
          setStep={setStep}
          whatStepNext="4" />
      </section>
      <ProgressBar
        step={step} />
    </>
  )
}

export default QuestionCheckboxes;