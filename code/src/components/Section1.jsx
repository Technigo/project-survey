import React from 'react';

const Section1 = (props) => {
  return (
    <>
      <form>
        {/* Marital Status */}
        <section className="section">
          <h3> Marital Status</h3>
          <select
            onChange={(event) =>
              props.setFormData({
                ...props.formData,
                status: event.target.value,
              })
            }
            value={props.formData.status}
            
          >
            <option value="">--Select--</option>
            <option value="Family">Family</option>
            <option value="SingelParent">SingelParent</option>
            <option value="Singel">Singel</option>
          </select>

          {/* Gender */}
          <h3> Choose your Gender: </h3>
          <section>
            <label htmlFor="genderFemale">
              <input
                className="radio"
                type="radio"
                value="Female"
                onChange={(event) =>
                  props.setFormData({
                    ...props.formData,
                    gender: event.target.value,
                  })
                }
                checked={props.formData.gender === 'Female'}
              />
              Female
            </label>

            <label htmlFor="genderMale">
              <input
                className="radio"
                type="radio"
                value="Male"
                onChange={(event) =>
                  props.setFormData({
                    ...props.formData,
                    gender: event.target.value,
                  })
                }
                checked={props.formData.gender === 'Male'}
              />
              Male
            </label>
          </section>
        </section>

        {/* Buttons */}
        <section className="allbtns">
          <button
            type="button"
            className="btn"
            onClick={() => props.onPrevStep()}
          >
            Previous page
          </button>
          <button
            type="Submit"
            className="btn"
            onClick={() => props.onNextStep()}
          >
            Next Page
          </button>
        </section>
      </form>
    </>
  );
};

export default Section1;
