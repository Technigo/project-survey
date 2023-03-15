import React from 'react';

const handleChange = (event) => {
  console.log(event.target.value);
}

const FormSelect = ({ answers }) => {
  return (
    <div onChange={handleChange}>
      {answers.map((answer) => (
        <select className="form-control" key={answer}>
          {answer}
          <option type="select" name="mySelect" value={answer} />
        </select>
      ))}
    </div>
  );
}

export default FormSelect;