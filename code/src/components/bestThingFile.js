import React from 'react';

export const BestThing = ({ bestThing, setBestThing }) => {
  const handleBestThing = (event) => {
    setBestThing(event.target.value);
  }
  return (

    <div className="selectbox">
      <h3> <span> Ok, what is the best thing about the site? </span></h3>
      <select
        className="dropdown"
        onChange={handleBestThing}
        value={bestThing}>
        <option value="None">Choose option</option>
        <option value="The design">The design</option>
        <option value="The accessibility">The accessibility</option>
        <option value="The information flow">The information flow</option>
        <option value="Everything">I like everything!</option>
      </select>
    </div>

  );
}
