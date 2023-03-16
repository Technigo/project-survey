/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useState } from 'react';
import StartPage from 'components/StartPage';
import NamePage from 'components/NamePage';

export const App = () => {
  /* Changes to next question in form */
  const [nextPage, setNextPage] = useState(0);
  /* this function changes to next page. It sets nextPage variable to +1 */
  const goToNextPage = () => {
    setNextPage(nextPage + 1)
  }

  const [nameInput, setNameInput] = useState('')

  return (
    <div className="main">
      <form className="content">
        {nextPage === 0
          && <StartPage nextPlease={goToNextPage} />}
        {nextPage === 1
          && <NamePage nextPlease={goToNextPage} nameInput={nameInput} setNameInput={setNameInput} />}
        {nextPage === 2
          && 123}
        {/* Radio istället för 123 */}
        {nextPage === 3
          && 456}
        {/* Select istället för 456 */}
        {nextPage === 4
          && 789}
        {/* Kvitto istället för 789 */}
      </form>

    </div>
  );
}
