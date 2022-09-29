/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import NameInput from './NameInput';
import ConsideredAdult from './ConsideredAdult';
import FavoriteClothing from './FavoriteClothing';
import SubmissionOverview from './SubmissionOverview';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  const [adultAge, setAdultAge] = useState('');
  const [favClothes, setFavClothes] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {submitted && (
        <SubmissionOverview userName={userName} adultAge={adultAge} favClothes={favClothes} />
      )}
      {!submitted && (<form onSubmit={handleSubmit}>
        <NameInput setUserName={setUserName} />
        <ConsideredAdult adultAge={adultAge} setAdultAge={setAdultAge} />
        <FavoriteClothing setFavClothes={setFavClothes} />
        <button type="submit">Submit</button>
      </form>)}
    </>
  )
  /* if (submitted) {
    return <SubmissionOverview userName={userName} adultAge={adultAge} favClothes={favClothes} />
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <NameInput setUserName={setUserName} />
        <ConsideredAdult adultAge={adultAge} setAdultAge={setAdultAge} />
        <FavoriteClothing setFavClothes={setFavClothes} />
        <button type="submit">Submit</button>
      </form>
    )
  } */
}
export default Form;
