import React, { useState } from 'react';
import QuestionName from './QuestionName';
import QuestionCountry from './QuestionCountry';
import QuestionTravelPartner from './QuestionTravelPartner';
import Summary from './Summary';


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
      {!showSummary ? (
        <section className="form-section">
          <h1 className="header">Travel the world!</h1>
          <form>
            <QuestionName name={name} funcSetName={setName} />
            <QuestionCountry funcSetPlace={setPlace} />
            <QuestionTravelPartner partner={partner} funcSetPartner={setPartner} />
            <button type="submit" onClick={handleSubmit} disabled={name === '' || setPlace === '' || partner === '' } >Submit</button>
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
