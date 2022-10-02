import React from 'react';

const Section3 = (props) => {
  return (
    <>
      <form>
        <section className="section">
          <h3>Section 3| This esction is about your satisfaction. </h3>
        </section>
        <section className="section3">
          {/* Where question */}
          <p>How did u perfer your order? </p>
          <section className="label">
            <label htmlFor="store">
              <input
                className="radio"
                type="radio"
                value="Store"
                onChange={(event) =>
                  props.setFormData({
                    ...props.formData,
                    where: event.target.value,
                  })
                }
                checked={props.formData.where === 'Store'}
              />
              Store
            </label>
            <label htmlFor="website">
              <input
                className="radio"
                type="radio"
                value="Website"
                onChange={(event) =>
                  props.setFormData({
                    ...props.formData,
                    where: event.target.value,
                  })
                }
                checked={props.formData.where === 'Website'}
              />
              Website
            </label>
          </section>

          {/* Service Satisfaction  */}
          <p>
            If at store, Are you statisfied with our service and our collegues?
          </p>
          <section className="label">
            <label htmlFor="serviceSatosfaction">
              <input
                className="radio"
                type="radio"
                value="Yes"
                onChange={(event) =>
                  props.setFormData({
                    ...props.formData,
                    serviceSatisfaction: event.target.value,
                  })
                }
                checked={props.formData.serviceSatisfaction === 'Yes'}
              />
              Yes
            </label>

            <label htmlFor="serviceSatosfaction">
              <input
                className="radio"
                type="radio"
                value="No"
                onChange={(event) =>
                  props.setFormData({
                    ...props.formData,
                    serviceSatisfaction: event.target.value,
                  })
                }
                checked={props.formData.serviceSatisfaction === 'No'}
              />
              No
            </label>
          </section>

          {/* Web Satisfaction  */}
          <p>If on the website, are you satisfied from our website? </p>
          <section className="label">
            <label htmlFor="wesiteSatosfaction">
              <input
                className="radio"
                type="radio"
                value="Yes"
                onChange={(event) =>
                  props.setFormData({
                    ...props.formData,
                    WebSatisfaction: event.target.value,
                  })
                }
                checked={props.formData.WebSatisfaction === 'Yes'}
              />
              Yes
            </label>
            <label htmlFor="wesiteSatosfaction">
              <input
                className="radio"
                type="radio"
                value="No"
                onChange={(event) =>
                  props.setFormData({
                    ...props.formData,
                    WebSatisfaction: event.target.value,
                  })
                }
                checked={props.formData.WebSatisfaction === 'No'}
              />
              No
            </label>
          </section>

          {/* Bottons */}
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
        </section>
      </form>
    </>
  );
};

export default Section3;
