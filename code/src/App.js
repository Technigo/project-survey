import React, { useState } from 'react'
import { Dropdown } from './question1'
import { RadioButton1 } from './question2'
import { RadioButton2 } from './question3'
import { RadioButton3 } from './question4'
import { FreeText } from './question5'
import { ContactDetails } from './contactdetails'
import { Checkbox } from './checkbox'
import { Summary } from './summary'

export const App = () => {
  /* const [page, setPage] = useState(firstQuestion); */
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  }

  return (
    <div className="content-container">
        <h1>Book a table at <span>Elsita & Alfredo</span></h1>
        <p>
          <span>Elsita & Alfredo</span> is a small family run authentic pizzeria. 
          Due to our small and intimate setting we don't have the space to accomodate groups larger than 8 people.
        </p>
        <p>
          PLease note that <span>Elsita & Alfredo</span> only accepts bookings for the upcoming weekend (Thur to Sun) of the current week.
          The booking for the week opens every Monday at 9.00. Luckily our delivery service delivers you favourite pizzas all days of the week, please 
          visit <a href="https://vibrant-ritchie-da31af.netlify.com">our website</a> for more information!
        </p>

        <form onSubmit={handleSubmit}>
          <Dropdown />
          <RadioButton1 />
          <RadioButton2 />
          <RadioButton3 />
          <FreeText />
          <ContactDetails />
          <Checkbox />

          <button type="submit">Submit</button> 
        </form>

        {showSummary && <Summary />
        }
    </div>
  );
};

/* return (
  <div>
    <button onclick={() => setPage(secondQuestion)}>Next</button>
    <button onclick={() => setPage(thirdQuestion)}>Next</button>
    <button onclick={() => setPage(fourthQuestion)}>Next</button>
    <button onclick={() => setPage(fifthQuestion)}>Next</button> 

    {page === 'firstQuestion' && (
      <div>
        <h1>Book a table at <span>Elsita & Alfredo</span></h1>
        <p>
          <span>Elsita & Alfredo</span> is a small family run authentic pizzeria. 
          Due to our small and intimate setting we don't have the space to accomodate groups larger than 8 people.
        </p>
        <p>
          PLease note that <span>Elsita & Alfredo</span> only accepts bookings for the upcoming weekend (Thur to Sun) of the current week.
          The booking for the week opens every Monday at 9.00. Luckily our delivery service delivers you favourite pizzas all days of the week, please 
          visit <a href="https://vibrant-ritchie-da31af.netlify.com">our website</a> for more information!
        </p>
        <form>
          <Dropdown />
        </form>  
        <button onclick={() => setPage(secondQuestion)}>Next</button>
      </div>
    )}

    {page === 'secondQuestion' && (
      <div>
        <form>
        <RadioButton1 />
        </form>
        <button onclick={() => setPage(thirdQuestion)}>Next</button>
      </div>
    )}

    {page === 'thirdQuestion' && (
      <div>
        <form>
        <RadioButton2 />
        <RadioButton3 />
        </form>
      </div>
    )}

    {page === 'fourthQuestion' && (
      <div>
       <form>
        <FreeText />
        </form>
        <button onclick={() => setPage(fifthQuestion)}>Next</button> 
      </div> 
    )}
    
    {page === 'fifthQuestion' && (
      <div>
        <form>
          <ContactDetails />
          <Checkbox />
        </form>
        <button type="submit" onClick={<Submit />}>Submit</button>
      </div>
    )}
  </div> */