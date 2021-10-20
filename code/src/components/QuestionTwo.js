import React from 'react';

import Alert from './Alert';

const QuestionTwo = ({
  plantSkill,
  onPlantSkillChange,
  onStepChange,
  onEnter,
  alert,
}) => {
  // const { nameInput, onNameInputChange } = props;
  //Then you also have to send props as argument.

  return (
    <form>
      <label>How would you describe your plant skills?</label>
      <select
        onChange={onPlantSkillChange}
        required
        value={plantSkill}
        onKeyPress={onEnter}
      >
        <option value='' disabled>
          Choose from the list:
        </option>
        <option value='Expert'>Gardening/Plant expert</option>
        <option value='Weekend gardener'>Weekend gardener</option>
        <option value='Happy enthusiast'>Happy plant enthusiast</option>
        <option value='No skills'>All my plants are dead :(</option>
      </select>

      {alert && <Alert />}
      <button className='form-button' type='button' onClick={onStepChange}>
        Next
      </button>
    </form>
  );
};

export default QuestionTwo;
