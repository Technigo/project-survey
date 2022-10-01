import React, { useEffect, useState } from 'react';
import Footer from 'components/Footer';
import Landing from 'components/Landing';
import Questionnaire from 'components/Questionnaire';
import Summary from 'components/Summary';

export const App = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gift, setGift] = useState('');
  const [excitement, setExcitement] = useState(0);
  const [favActivity, setFavActivity] = useState('');

  // console.log('gift:', gift);

  // helper functions to navigate through the pages, that can be passed to other components without having to pass both pageIndex and setPageIndex
  const nextPage = () => {
    setPageIndex(pageIndex + 1);
  };
  const previousPage = () => {
    setPageIndex(pageIndex - 1);
  };

  // callback function for the keypress event listeners below
  const handleKeypress = event => {
    if (event.key === 'Enter' && pageIndex < 6) {
      nextPage();
    }
  };

  // Adds an event listener for keypress Enter to the whole window object
  // useEffect adds the event listener after the component first mounts, and every time pageIndex changes
  // the return callback function removes the event listener when the component unmounts, to avoid adding it infinitely
  useEffect(() => {
    window.addEventListener('keypress', handleKeypress);
    return () => {
      window.removeEventListener('keypress', handleKeypress);
    };
  }, [pageIndex]);

  // renders a different page depending on the pageIndex
  const router = pageIndex => {
    switch (pageIndex) {
      case 0:
        return <Landing setPageIndex={setPageIndex} />;
      case 1:
        return (
          <Questionnaire
            label="Let's get started - what's your name?"
            pageIndex={pageIndex}
            inputType="text"
            setter={setName}
            value={name}
            nextPage={nextPage}
          />
        );
      case 2:
        return (
          <Questionnaire
            label={`And your surname, ${name}?`}
            pageIndex={pageIndex}
            inputType="text"
            setter={setSurname}
            value={surname}
            nextPage={nextPage}
          />
        );
      case 3:
        return (
          <Questionnaire
            label="What kind of gift would you like?"
            pageIndex={pageIndex}
            inputType="select"
            setter={setGift}
            value={gift}
            nextPage={nextPage}
          />
        );
      case 4:
        return (
          <Questionnaire
            label="On a Friday night, you're usually..."
            pageIndex={pageIndex}
            inputType="radio"
            setter={setFavActivity}
            value={favActivity}
            nextPage={nextPage}
          />
        );
      case 5:
        return (
          <Questionnaire
            label="And finally, how excited are you for Christmas?! 🎄"
            pageIndex={pageIndex}
            inputType="rangeslider"
            setter={setExcitement}
            value={excitement}
            nextPage={nextPage}
            buttonText="Submit"
          />
        );
      default:
        return (
          <Summary
            name={name}
            surname={surname}
            gift={gift}
            excitement={excitement}
            favActivity={favActivity}
          />
        );
    }
  };

  return (
    <div className="outer-wrapper">
      <main className="inner-wrapper">{router(pageIndex)}</main>
      {pageIndex > 0 && pageIndex < 6 && (
        <Footer
          pageIndex={pageIndex}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      )}
    </div>
  );
};
