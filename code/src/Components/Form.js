import React, { useState } from 'react';

import NameQuestion from './NameQuestion';
import SecondQuestion from './TeamQuestion';
import ThirdQuestion from './DoneQuestion';
import FourthQuestion from './WillDoQuestion';
import FifthQuestion from './BlockersQuestion';
import SixthQuestion from './BlockersDescriptionQuestion';
import Overview from './Overview';

export const Form = () => {
  const [nameInput, setNameInput] = useState('');
  const [team, setTeam] = useState('');
  const [doneInput, setDoneInput] = useState('');
  const [willDoInput, setWillDoInput] = useState('');
  const [blockers, setBlockers] = useState('no');
  const [blockersDescription, setBlockersDescription] = useState('');
  const [step, setStep] = useState(1);
  const [showOverview, setShowOverview] = useState(false);

  // god practise to make a function out of onChange event
  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };
  const onTeamChange = (event) => {
    setTeam(event.target.value);
  };
  const onDoneInputChange = (event) => {
    setDoneInput(event.target.value);
  };
  const onWillDoInputChange = (event) => {
    setWillDoInput(event.target.value);
  };
  const onBlockersChange = (blockers) => {
    setBlockers(blockers);
  };
  const onBlockersDescriptionChange = (event) => {
    setBlockersDescription(event.target.value);
  };
  const onStepChange = () => {
    setStep(step + 1);
  };
  const handleShowOverview = () => {
    setShowOverview(true);
  };
  const onRestartChange = () => {
    window.location.reload(false);
  };

  // Version 1
  return (
    // add first start page here

    // Add a button to start the questions
    <>
      {showOverview ? (
        <Overview
          nameInput={nameInput}
          team={team}
          doneInput={doneInput}
          willDoInput={willDoInput}
          blockers={blockers}
          blockersDescription={blockersDescription}
          onRestartChange={onRestartChange}
        />
      ) : (
        <div>
          {step === 1 && (
            <NameQuestion
              nameInput={nameInput}
              onNameInputChange={onNameInputChange}
              onStepChange={onStepChange}
            />
          )}
          {step === 2 && (
            <SecondQuestion
              team={team}
              onTeamChange={onTeamChange}
              onStepChange={onStepChange}
            />
          )}
          {step === 3 && (
            <ThirdQuestion
              doneInput={doneInput}
              onDoneInputChange={onDoneInputChange}
              onStepChange={onStepChange}
            />
          )}

          {step === 4 && (
            <FourthQuestion
              willDoInput={willDoInput}
              onWillDoInputChange={onWillDoInputChange}
              onStepChange={onStepChange}
            />
          )}

          {step === 5 && (
            <FifthQuestion
              blockers={blockers}
              onBlockersChange={onBlockersChange}
              onStepChange={onStepChange}
              handleShowOverview={handleShowOverview}
            />
          )}

          {step === 6 && (
            <SixthQuestion
              blockersDescription={blockersDescription}
              onBlockersDescriptionChange={onBlockersDescriptionChange}
              handleShowOverview={handleShowOverview} //ändrat från onStepChange, även testat {() => setShowOverview(true)}
            />
          )}
        </div>
      )}
    </>
    // <div>
    //   {step === 1 && (
    //     <FirstQuestion
    //       nameInput={nameInput}
    //       onNameInputChange={onNameInputChange}
    //       onStepChange={onStepChange}
    //     />
    //   )}
    //   {step === 2 && (
    //     <SecondQuestion
    //       team={team}
    //       onTeamChange={onTeamChange}
    //       onStepChange={onStepChange}
    //     />
    //   )}
    //   {step === 3 && (
    //     <ThirdQuestion
    //       doneInput={doneInput}
    //       onDoneInputChange={onDoneInputChange}
    //       onStepChange={onStepChange}
    //     />
    //   )}

    //   {step === 4 && (
    //     <FourthQuestion
    //       willDoInput={willDoInput}
    //       onWillDoInputChange={onWillDoInputChange}
    //       onStepChange={onStepChange}
    //     />
    //   )}

    //   {step === 5 && (
    //     <FifthQuestion
    //       blockers={blockers}
    //       onBlockersChange={onBlockersChange}
    //       onStepChange={onStepChange}
    //     />
    //   )}

    //   {step === 6 && (
    //     <SixthQuestion
    //       blockersDescription={blockersDescription}
    //       onBlockersDescriptionChange={onBlockersDescriptionChange}
    //       onStepChange={onStepChange}
    //     />
    //   )}

    //   {/* {step === 7 && (
    //     <Overview
    //       nameInput={nameInput}
    //       team={team}
    //       doneInput={doneInput}
    //       willDoInput={willDoInput}
    //       blockers={blockers}
    //       blockersDescription={blockersDescription}
    //     />
    //   )} */}
    // </div>

    // add a chart?
  );
};

// {step === 3 && (
//   <Overview nameInput={nameInput} surnameInput={surnameInput} />
// )}

// {step === 4 && (
//   <FourthQuestion
//     flavor={flavor}
//     onFlavorChange={onFlavorChange}
//     onStepChange={onStepChange}
//   />
// )}

// version 2
//   if (step === 1) {
//     return (
//       <FirstQuestion
//         nameInput={nameInput}
//         onNameInputChange={onNameInputChange}
//         onStepChange={onStepChange}
//       />
//     );
//   } else if (step === 2) {
//     return (
//       <SecondQuestion
//         surnameInput={surnameInput}
//         onSurnameInputChange={onSurnameInputChange}
//         onStepChange={onStepChange}
//       />
//     );
//   } else if (step === 3) {
//     return <Overview nameInput={nameInput} surnameInput={surnameInput} />;
//   }
// };

export default Form;
