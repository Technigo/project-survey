import React from "react";
import Button from "./Button";

const QuestionCompany = ({ company, onCompanyChange }) => {
  const companyOptions = [
    "alone",
    "with friends",
    "with family",
    "with your pet",
  ];

  return (
    <section className="main">
      <p className="question">Who will you travel with?</p>
      <form className="form">
        {companyOptions.map((companyValue) => (
          <label
            key={companyValue}
            htmlFor="company-option"
            className="company-label"
          >
            <input
              className="company-option"
              type="radio"
              name="company-option"
              value={companyValue}
              onChange={onCompanyChange}
              defaultChecked={company === companyValue}
              required
              aria-label="Navigate with arrows and then press Enter"
            />
            {companyValue}
          </label>
        ))}
      </form>
      <Button button="Continue" />
    </section>
  );
};

export default QuestionCompany;
