import React, { useState } from 'react'
import { Dropdown } from './dropdown'
import { RadioButton } from './radiobutton'
import { FreeText } from './freetext'
import { TextBox } from './textbox'
import { Checkbox } from './checkbox'
import { Button } from './button'
import { Summary } from './summary'

const amountGuests = ["1", "2", "3", "4", "5", "6", "7", "8"];
const bookDay = ["Thursday", "Friday", "Saturday", "Sunday"];
const dinnerTimes = ["18.00", "18.30", "19.00", "19.30", "20.00", "20.30", "21.00", "21.30", "22.00"];

export const App = () => {
  /* const [page, setPage] = useState(firstQuestion); */
  const [showSummary, setShowSummary] = useState(false);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [day, setDay] = useState("");
  const [dinnerTime, setDinnerTime] = useState("");
  const [preferences, setPreferences] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState("");

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
          <Dropdown location={location} setLocation={setLocation} />
          <RadioButton arrayItem={guests} setArrayItem={setGuests} array={amountGuests} question={'How many will you be?'} />
          <RadioButton arrayItem={day} setArrayItem={setDay} array={bookDay} question={'Select a date:'} />
          <RadioButton arrayItem={dinnerTime} setArrayItem={setDinnerTime} array={dinnerTimes} question={'Select a time:'} />
          <FreeText text={preferences} setText={setPreferences} question={'Please let us know if you have any allergies, food preferences or anything else you want us to know:'} />
          <TextBox text={name} setText={setName} title={'Booking name:'} placeholder={'Name'} type={'text'} />
          <TextBox text={email} setText={setEmail} title={'Email:'} placeholder={'user@domain.com'} type={'email'} />
          <Checkbox terms={terms} setTerms={setTerms} />
          <Button type={'submit'} title={'Submit'} />
        </form>

        {showSummary && <Summary 
            name={name}
            day={day}
            dinnerTime={dinnerTime}
            guests={guests}
            location={location}
          />
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