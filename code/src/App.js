/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useState } from 'react';
import StartPage from 'components/StartPage';
import NamePage from 'components/NamePage';
import RadioQuestion from 'components/RadioQuestion';
import SelectQuestion from 'components/SelectQuestion';
import Summary from 'components/Summary';
import CheckboxQuestion from 'components/ChecboxQuestion';
import Email from 'components/Email';

export const App = () => {
  /* Changes to next question in form */
  const [nextPage, setNextPage] = useState(0);
  const [nameInput, setNameInput] = useState('')
  const [radioBtn, setRadioBtn] = useState('Never')
  const [selectBtn, setSelectBtn] = useState('select')
  const [checkboxBtn, setCheckboxBtn] = useState(false)
  const [emailBtn, setEmailBtn] = useState('')
  /* this function changes to next page. It sets nextPage variable to +1 */
  const goToNextPage = () => {
    if (nameInput === '' && nextPage === 1) {
      alert('Name is required')
      return
    } else if (selectBtn === 'select' && nextPage === 3) {
      alert('Choose an option')
      return
    }
    setNextPage(nextPage + 1)
  }
  const resetForm = () => {
    setNextPage(0)
  }

  // eslint-disable-next-line prefer-const
  let progressValue = ((100 / 6) * (nextPage))

  return (
    <div className="main">
      <div className="content flex flex-col gap-20">
        <div className="progressBar">
          <span>{nextPage}/{6}</span>
          <progress value={progressValue} max="100" />
        </div>

        <form>
          {nextPage === 0
            && <StartPage nextPlease={goToNextPage} />}
          {nextPage === 1
            && <NamePage nextPlease={goToNextPage} nameInput={nameInput} setNameInput={setNameInput} />}
          {nextPage === 2
            && <RadioQuestion nextPlease={goToNextPage} radioBtn={radioBtn} setRadioBtn={setRadioBtn} />}
          {nextPage === 3
            && <SelectQuestion nextPlease={goToNextPage} selectBtn={selectBtn} setSelectBtn={setSelectBtn} />}
          {nextPage === 4 && <CheckboxQuestion nextPlease={goToNextPage} checkboxBtn={checkboxBtn} setCheckboxBtn={setCheckboxBtn} />}
          {nextPage === 5 && <Email nextPlease={goToNextPage} emailBtn={emailBtn} setEmailBtn={setEmailBtn} />}
          {nextPage === 6 && <Summary summaryList={[nameInput, radioBtn, selectBtn, checkboxBtn ? 'Yes' : 'No', emailBtn]} resetForm={resetForm} />}
        </form>
      </div>
    </div>
  );
}