import React from 'react';
import data from '../data';

export const Results = (props) => {
  data.listings.map((listing) => {
    console.log(listing)
    return (
      <div className="results-container">
        <h1>{props.resultsTitle}</h1>
        <div className="result-card">
          <img
            className="listing-image"
            src={listing.image}
            alt="property listed in Stockholm" />
          <p className="listing-info">{listing.listPrice} </p>
          <p className="listing-info">{listing.namedAreas} </p>
        </div>
      </div>
    );
  });
};
