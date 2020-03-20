import React from "react";
import 'Components/FormStyle.css'

export const FavorQuestion = props => {
    const {provideGroceries, setProvideGroceries} = props;
    const {provideMedication, setProvideMedication} = props;
    const {provideMealDeliveryServices,setProvideMealDeliveryServices} = props; 

    return (
      <section className='question-container'>
        <p>What can you do for your neighbor?</p>
        <label>
          <input
          type="checkbox"
          checked={provideGroceries}
          onChange={event => setProvideGroceries(event.target.checked)}
          />
          Provide groceries
        </label>
        <label>
          <input
          type="checkbox"
          checked={provideMealDeliveryServices}
          onChange={event => setProvideMealDeliveryServices(event.target.checked)}
          />
          Meal delivery services
        </label>
        <label>
          <input
          type="checkbox"
          checked={provideMedication}
          onChange={event => setProvideMedication(event.target.checked)}
          />
          Provide medication
        </label>
      </section>
    )
  }