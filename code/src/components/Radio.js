import React from "react";
import "./Radio.css";

export const Radio = (props) => {
  const { futureExpectations, setFutureExpectations } = props;
  const values = [
    props.value1, 
    props.value2, 
    props.value3, 
    props.value4
  ];

  return (
    <>
      <div className="radio-buttons__inner">
        <h3>Which of the following would you especially want to experience?</h3>
        {values.map((val) => (
          <label htmlFor={val} key={val}>
            <input
              id={val}
              type="radio"
              value={val}
              onChange={(event) => setFutureExpectations(event.target.value)}
              checked={futureExpectations === val}
              required
            ></input>
            {val}
          </label>
        ))}
      </div>
    </>
  );
};
