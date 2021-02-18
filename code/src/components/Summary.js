import React from 'react';

import 'components/SummaryCss.css';


export const Summary = ({ name, daysPerWeek, sweet, userLikes }) => {
    
  return (
  <>
    <section className="summary">
      <h2 tabindex="0">Hey {name}! You eat sweets {daysPerWeek} days a week, and you're a fan of {sweet}! AND you like {userLikes} (me too!)</h2>
    </section>
    <section className="summary-button" tabindex="0">
      <button tabindex="0" type="submit" onClick={() => window.location.reload()}>Again</button>
    </section>
  </>
  );
};


