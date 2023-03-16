/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useState } from 'react';
import StartPage from 'components/StartPage';
import NamePage from 'components/NamePage';
import RadioQuestion from 'components/RadioQuestion';
import SelectQuestion from 'components/SelectQuestion';
import Summary from 'components/Summary';

export const App = () => {
  /* Changes to next question in form */
  const [nextPage, setNextPage] = useState(0);
  /* this function changes to next page. It sets nextPage variable to +1 */
  const goToNextPage = () => {
    setNextPage(nextPage + 1)
  }
  const resetForm = () => {
    setNextPage(0)
  }

  const [nameInput, setNameInput] = useState('')
  const [radioBtn, setRadioBtn] = useState('Never')
  const [selectBtn, setSelectBtn] = useState('Select option')
  return (
    <div className="main">
      <form className="content">
        {nextPage === 0
          && <StartPage nextPlease={goToNextPage} />}
        {nextPage === 1
          && <NamePage nextPlease={goToNextPage} nameInput={nameInput} setNameInput={setNameInput} />}
        {nextPage === 2
          && <RadioQuestion nextPlease={goToNextPage} radioBtn={radioBtn} setRadioBtn={setRadioBtn} />}
        {nextPage === 3
          && <SelectQuestion nextPlease={goToNextPage} selectBtn={selectBtn} setSelectBtn={setSelectBtn} />}
        {nextPage === 4
          && <Summary nameInput={nameInput} radioBtn={radioBtn} selectBtn={selectBtn} resetForm={resetForm} />}
      </form>

    </div>
  );
}
