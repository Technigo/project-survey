import React from 'react';
import data from '../data';
import { NextButton } from './NextButton';

export const Results = (props) => {
  console.log(data)
  console.log(data.listings.filter((listing) => listing.rooms === props.answers.rooms))
  return (
    <>
      <h1 className="results-title">{props.resultsTitle}</h1>
      <div className="results-container">
        {data.listings.filter((listing) => listing.rooms === parseInt(props.answers.rooms, 10))
          .map((listing) => {
            console.log(listing);
            return (
              <div
                className="result-card"
                onClick={() => window.open(listing.url, '_blank')}
                onKeyDown={() => window.open(listing.url, '_blank')}
                role="link"
                tabIndex="0">
                <img
                  className="result-image"
                  src={listing.image}
                  alt="property listed in Stockholm" />
                <p className="listing-info">{listing.location.address.streetAddress} </p>
                <p className="listing-info">{listing.livingArea} m<sup>2</sup> </p>
                <p className="listing-info">{listing.location.namedAreas} </p>
              </div>
            );
          })}
      </div>
      <div className="buttons-container">
        <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
      </div>
    </>
  );
};