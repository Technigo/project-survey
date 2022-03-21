import React from 'react';


 const DaysOffice = ({chosenDay, onDayChosen}) => {
  
    
    return (
      <div>
        <section className='questionWrapper'>
          <div className='question'>
        <select
        className='drop-down'
        aria-label='Choose preferred officedays'
          onChange={onDayChosen}
          value={chosenDay}
        >
        
          <option value="" disabled>How many days a week would you like to work in the office?</option>
          
          <option value="one">1 day a week</option>
          <option value="two">2 days a week</option>
          <option value="three">3 days a week</option>
          <option value="four">4 days a week</option>
          <option value="five">5 days a week</option>
        </select>
         </div>
      </section>
      </div>
    );
 };
    
  
  export default DaysOffice;
