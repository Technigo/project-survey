import React, { useState } from 'react';

const Section3 = (props) => {
  const [question, setQuestion] = useState('');

  return (
    <>
      <h2>Section 3| This esction is about your satisfaction. </h2>
      <p>Would you rate the overal quality of our products? </p>
      <form>
        <label>
          <input type="radio" value="" />
        </label>

        <label>
          <input
            type="radio"
            value="male"
            onChange={(event) => setGender(event.target.value)}
          
            
          />
        </label>
      </form>

      <p>How did u perfer your order? </p>
      {/* In our Store, 
On the Website, */}

      <p>
        if it is store, Are you statisfied with our service and our collegaes
        service?
      </p>
      {/* Yes No */}

      <p>If in the website, How quich and representative is our website? </p>
      {/* fast, medium, slow */}

      <button type="button" onClick={() => props.onNextStep()}>
        continue
      </button>

      <button type="button" onClick={() => props.onPrevStep()}>
        Previous
      </button>
    </>
  );
};

export default Section3;
