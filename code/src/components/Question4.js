import React from 'react';

const Question4 = ({ question4, setQuestion4 }) => {
  const handleQuestion4Change = (event) => {
    setQuestion4(event.target.value)
  }
  // const options = [
  //   { value: 'green', label: 'Green' },
  //   { value: 'blue', label: 'Blue' },
  //   { value: 'black', label: 'Black' },
  //   { value: 'red', label: 'Red' },
  //   { value: 'yellow', label: 'Yellow' },
  //   { value: 'white', label: 'White' }
  // ]

  return (
    <section className="dropdownSelect">
      <p>What do you think again?</p>
      <select
        htmlFor="options"
        className="dropdown"
        id="options"
        value={question4}
        onChange={(event) => handleQuestion4Change(event)}>

        <option disabled value="">Select an option:</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
      </select>
    </section>
  );
}

export default Question4;