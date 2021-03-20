import React from 'react';

import BlobQuestions from './BlobQuestions';
import FormButtons from './FormButtons';

const SushiQuestion = ({ sushi, callbackOnChange, step, setStep }) => {

  const handleSushiChange = (e) => {
    callbackOnChange(e.target.name, e.target.value);
  };

  return (
    <>
      <div className="sushi-container">
        <BlobQuestions />
        <div className="container">
          <label 
              className="sushi-label"
              htmlFor="sushi">
                Favourite sushi? 
            </label>
            <select 
              className="sushi-select"
              id="sushi"
              onChange={handleSushiChange}
              value={sushi}
              required
              name="sushi"
            >
              <option value="">Select sushi</option>
              <option value="maki">Maki</option>
              <option value="uramaki">Uramaki</option>
              <option value="sashimi">Sashimi</option>
              <option value="temaki">Temaki</option>
              <option value="nigiri">Nigiri</option>
              <option value="gunkan">Gunkan</option>
            </select>
            <FormButtons 
              step={step}
              setStep={setStep}
            />
        </div>
      </div>
    </>
  );
};

export default SushiQuestion;