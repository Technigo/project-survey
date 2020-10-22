import React, { useState } from 'react';
import SelectGender from './SelectGender';
import CheckboxGroupActivity from './CheckboxGroupActivity';
import RadioButtonGroupRecommendation from './RadioButtonGroupRecommendation';
import RadioButtonGroupExpectations from './RadioButtonGroupExpectations';

const Form = () => {
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [activities, setActivities] = useState([]);
  const [recommendation, setRecommendation] = useState('');
  const [expectations, setExpectations] = useState('');
  
  const onYearOfBirthChange = event => {
      setYearOfBirth(event.target.value);
  };

  const handleGenderChange = event => {
      setGender(event.target.value);
  };

  const handleActivitiesChange = activityValue => {
    activities.includes(activityValue)
      ? setActivities( activities.filter(item => item !== activityValue) )
      : setActivities( [...activities, activityValue] );
  };

  const handleRecommendationChange = event => {
    setRecommendation(event.target.value);
  };

  const handleExpectationChange = event => {
    setExpectations(event.target.value);
  };




  console.log(gender);
  console.log(activities);

return (
  <form>
    <div>
      <label htmlFor="yearOfBirth">Ditt födelseår</label>
      <input
        value={yearOfBirth} 
        onChange={onYearOfBirthChange}
        id='yearOfBirth'
        type="number"
        min="1900"
        max="2020"
      >
      </input>
    </div>
    <SelectGender 
      userGender={gender}
      onGenderChange={handleGenderChange}
    />
    <CheckboxGroupActivity
      userActivities={activities}
      onActivitiesChange={handleActivitiesChange}
    />
    <RadioButtonGroupRecommendation
      userRecommendation={recommendation}
      onRecommendationChange={handleRecommendationChange}
    />
    <RadioButtonGroupExpectations
      userExpectation={expectations}
      onExpectationChange={handleExpectationChange}
    />
  </form>
)
};
export default Form;