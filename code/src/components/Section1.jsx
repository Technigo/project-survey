import React, { useState } from 'react';

const Section1 = (props) => {
  const [data, setData] = useState({
    gender: '',
    status: 'xxx',
  });

  return (
    <>
      <h2> Marital Status</h2>
      <form>
        <select
          onChange={(event) => setData({ ...data, status: event.target.value })}
          value={data.status}
        >
          <option value="">--Select--</option>
          <option value="family">Family</option>
          <option value="SingelParent">SingelParent</option>
          <option value="Singel">Singel</option>
        </select>
        <h2> Choose your Gender: </h2>
        <label>
          <input
            type="radio"
            value="female"
            onChange={(event) =>
              setData({ ...data, gender: event.target.value })
            }
            checked={data.gender === 'female'}
          />
          Female
        </label>

        <label>
          <input
            type="radio"
            value="male"
            onChange={(event) =>
              setData({ ...data, gender: event.target.value })
            }
            checked={data.gender === 'male'}
          />
          Male
        </label>

        <button type="button" onClick={() => props.onNextStep()}>
          continue
        </button>

        <button type="button" onClick={() => props.onPrevStep()}>
          Previous
        </button>
        <pre>{JSON.stringify(data)}</pre>
      </form>
    </>
  );
};

export default Section1;
