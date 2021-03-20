/* eslint-disable linebreak-style */

import React, { useState } from 'react'

import FormQuestions from 'components/FormQuestions'
import Checkboxes from 'components/Checkboxes'
import Summary from 'components/Summary'

const genderGroups = ['male', 'female', 'other']

const Form = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [gender, setGender] = useState('')
  const [anamnes, setAnamnes] = useState('')
  const [IsSubmited, setIsSubmited] = useState(false)
  const [checkboxGroup, setCheckboxGroup] = useState([])

  const onFnameChange = (e) => {
    setFname(e.target.value)
  }

  const onLnameChange = (e) => {
    setLname(e.target.value)
  }

  const onGenderChange = (e) => {
    setGender(e.target.value)
  }

  const onAnamnesChange = (e) => {
    setAnamnes(e.target.value)
  }

  const onCheckboxToggle = (checkBoxValue) => {
    if (checkboxGroup.includes(checkBoxValue)) {
      setCheckboxGroup(checkboxGroup.filter(item => item !== checkBoxValue))
    } else {
      setCheckboxGroup([checkBoxValue, ...checkboxGroup])
    }
  }

  const isSurveyComplete = () => {
    if (fname === '') {
      return false
    }

    if (lname === '') {
      return false
    }

    if (gender === '') {
      return false
    }

    if (anamnes === '') {
      return false
    }

    if (checkboxGroup.length === 0) {
      return false
    }

    return true
  }

  if (isSurveyComplete()) {
    console.log('completed survey')
  }
  if (IsSubmited === false) {
    return (
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="name">
          <label htmlFor="fname">First Name:  </label>
          <input
            id="fname"
            type="text"
            value={fname}
            onChange={onFnameChange} />
        </div>

        <div className="name">
          <label htmlFor="lname">Last Name:  </label>
          <input
            id="lname"
            type="text"
            value={lname}
            onChange={onLnameChange} />
        </div>

        <div className="gender">
                    Gender:
          {genderGroups.map((group) => (
            <label tabindex="0" key={group}>
              <input
                type="radio"
                value={group}
                onChange={onGenderChange}
                checked={gender === group} />
              {group}
            </label>
          ))}
        </div>

        <div className="anamnes">
          <FormQuestions
            onAnamnesChange={onAnamnesChange}
            anamnes={anamnes} />

        </div>

        <Checkboxes
          onCheckboxToggle={onCheckboxToggle}
          checkboxGroup={checkboxGroup} />

        <div className="submit">
          <input
            type="submit"
            value="Submit"
            disabled={!isSurveyComplete()}
            onClick={
              () => setIsSubmited(true)
            } />
        </div>
      </form>
    )
  } else {
    return (
      <Summary
        fname={fname}
        lname={lname}
        gender={gender}
        anamnes={anamnes}
        checkboxGroup={checkboxGroup} />
    )
  }
}

export default Form