import React from 'react';
import data from '../data';
import { NextButton } from './NextButton';

export const Results = (props) => {
  return (
    <div className="results-container">
      <h1>{props.resultsTitle}</h1>
      {
        data.listings.map((listing) => {
          return (
            <div
              className="result-card"
              onClick={() => window.open(listing.url, '_blank')}
              onKeyDown={() => window.open(listing.url, '_blank')}
              role="link"
              tabIndex={0}>
              <img
                className="listing-image"
                src={listing.image}
                alt="property listed in Stockholm" />
              <p className="listing-info">{listing.listPrice} kr </p>
              <p className="listing-info">{listing.livingArea} m<sup>2</sup> </p>
              <p className="listing-info">{listing.location.namedAreas} </p>
            </div>
          );
        })
      }
      <NextButton
        onNext={props.onNext}
        buttonLabel={props.restartButtonLabel} />
    </div>
  );
};
