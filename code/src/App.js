import React, { useState } from 'react';
import QuestionName from './Components/QuestionName';
import QuestionCountry from './Components/QuestionCountry';
import QuestionTravelPartner from './Components/QuestionTravelPartner';
import Summary from './Components/Summary';
import plane from './assets/plane.png';
import SubmitButton from 'Components/SumbitButton';


export const App = () => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [partner, setPartner] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <>
      {!showSummary ? ( //If !showsummary is true show form-section, if false show summary
        <section className="form-section">
          <h1 className="header" tabIndex="0">Travel the world!</h1>
          <img className="plane" src={plane} alt=""></img>
          <h2 tabIndex="0">Are you ready for your next adventure? Please fill in the form!</h2>
          <form>
            <QuestionName
              name={name}
              funcSetName={setName}
            />
            <QuestionCountry
              place={place}
              funcSetPlace={setPlace}
            />
            <QuestionTravelPartner
              partner={partner}
              funcSetPartner={setPartner}
            />
            <SubmitButton name={name} place={place} partner={partner} handleSubmit={handleSubmit} />
          </form>
        </section>
          ) : (
          <Summary
            name={name}
            place={place}
            partner={partner}
          />   
        )}
    </>
  )
}
